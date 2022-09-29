import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { PartialObserver } from 'rxjs';
import { CategorieService } from 'src/app/categorie.service';
import { Category } from 'src/app/category';
import { ResourceService } from 'src/app/resource.service';
import { SubCategory } from 'src/app/sub-category';

import { Resources } from '../../resource';


@Component({
  selector: 'app-resources-detail',
  templateUrl: './resources-detail.component.html',
  styleUrls: ['./resources-detail.component.css']
})
export class ResourcesDetailComponent implements OnInit {

  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20];

  getCategorie: PartialObserver<Category[]>;
  private getSubCategorie: PartialObserver<SubCategory[]>;
  private getResource: PartialObserver<Resources>;
  public searchForm: FormGroup;
  public categories: Category[] = [];
  public subCategories: SubCategory[] = [];
  public resources: Resources[] = [];
  public dataSource: MatTableDataSource<Resources>;
  getSubCategories: { next: (response: Category[]) => void; };
  getResources: { next: (response: Resources) => void; };
  closeDialogSubscription: any;
  dialog: MatDialog;
  private _snackBar: any;
  public displayedColumns: string[] = [
    'category',
    'subCategory',
    'name',
    'reference',
    'picture',
    'viewAction',
    'editAction',
    'deleteAction',
  ];

  constructor(
   // private _snackBar: MatSnackBar,
    public domSanitizer: DomSanitizer,
    private _formBuilder: FormBuilder,
    private categoriesService: CategorieService,
    private resourcesService: ResourceService,
    //private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = [];
    this.searchForm = new FormGroup({});
    this.searchForm = this._formBuilder.group({
      category: [''],
      subCategory: [''],
      search: [''],
    });
    this.getCategorie = {
      next: (response: Category[]): void => {
        if (response) {
          this.categories = response;
        }
      },
    };
    this.getSubCategories = {
      next: (response: Category[]): void => {
        if (response) {
          this.subCategories = response;
        }
      },
    };
    this.getResources = {
      next: (response: Resources): void => {
        if (response) {
          this.dataSource.data = response.resources;
          this.length = response.length;
        }
      },
    };
  }

   ngOnDestroy(): void {
    if (this.closeDialogSubscription) {
      this.closeDialogSubscription.unsubscribe();
    }
  }
  protected updateCategories(): void {
    this.categoriesService.getCategorie().subscribe(this.getCategorie);
  }

  protected updateSubCategories(idCategory: number): void {
    this.categoriesService
      .getSubCategories(idCategory)
      .subscribe(this.getSubCategories);
  }

  protected updateResources(
    idCategorie?: number,
    idSubCategorie?: number,
    search?: string,
    event?: PageEvent
  ): void {
    this.resourcesService
      .getResources(
        +localStorage.getItem('currentTechno')!,
        idCategorie,
        idSubCategorie,
        search,
        this.pageSize,
        event?.pageIndex,
        true
      )
      .subscribe(this.getResources);
  }

  get category(): FormControl {
    return this.searchForm.controls['category'] as FormControl;
  }

  get search(): FormControl {
    return this.searchForm.controls['search'] as FormControl;
  }

  get subCategory(): FormControl {
    return this.searchForm.controls['subCategory'] as FormControl;
  }

  public setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  ngOnInit(): void {
    this.updateCategories();
    this.updateResources(
      this.category.value,
      this.subCategory.value,
      this.search.value,
      {
        pageIndex: 0,
        pageSize: this.pageSize,
      } as PageEvent
    );
  }

  onCategoryChange(newCategory: any): void {
    this.updateSubCategories(newCategory.value);
  }

  onSearch(event?: PageEvent): void {
    if (event?.pageSize!) {
      this.pageSize = event?.pageSize!;
    }
    this.updateResources(
      this.category.value,
      this.subCategory.value,
      this.search.value,
      event
    );
  }

  onAddResource(): void {
    localStorage.setItem('dialogMode', 'create');
    const ref = this.dialog.open(ResourcesDetailComponent, {
      panelClass: '',
    });
    this.closeDialogSubscription = ref.afterClosed().subscribe(() => {
      this.updateResources(
        this.category.value,
        this.subCategory.value,
        this.search.value
      );
    });
  }

  onPictureClick(picture: any): void {
    localStorage.setItem('currentPicture', picture.target.currentSrc);
    this.dialog.open(PictureShowComponent, {
      panelClass: '',
      width: '90%',
      height: '90%',
    });
  }

  onUpdateResource(resource: Resources): void {
    localStorage.setItem('currentResource', '' + resource.id);
    localStorage.setItem('dialogMode', 'update');
    const ref = this.dialog.open(ResourcesDetailComponent, {
      panelClass: '',
    });
    this.closeDialogSubscription = ref.afterClosed().subscribe(() => {
      this.updateResources(
        this.category.value,
        this.subCategory.value,
        this.search.value
      );
    });
  }

  onViewResource(resource: Resources): void {
    localStorage.setItem('currentResource', '' + resource.id);
    localStorage.setItem('dialogMode', 'view');
    this.dialog.open(ResourcesDetailComponent, {
      panelClass: '',
    });
  }

  onDeleteResource(resource: Resources): void {
    const modal = this.dialog.open(DialogBoxComponent, {
      data: {
        title: 'Delete resource',
        content: 'Are you sure to delete "' + resource.name + '"',
        validationButton: 'Delete',
        closeButton: 'Cancel',
      } as DialogBoxEntry,
    });

    modal.afterClosed().subscribe((validate: any) => {
      if (validate) {
        this.resourcesService
          .deleteResources(resource.id)
          .subscribe((linkActivities: string[]) => {
            if (linkActivities && linkActivities.length > 0) {
              let message: string =
                'Resource is linked to these following activities :';
              for (let i = 0; i < linkActivities.length; i++) {
                message = message + '\n   - ' + linkActivities[i];
              }
              this._snackBar.open(message, 'X', {
                panelClass: 'error-snackbar',
              });
            } else {
              this.updateResources(
                this.category.value,
                this.subCategory.value,
                this.search.value
              );
              this._snackBar.open(
                'Resource ' + resource.name + ' has been deleted',
                '',
                {
                  duration: 3000,
                  panelClass: 'success-snackbar',
                }
              );
            }
          });
      }
    });
  }
}
