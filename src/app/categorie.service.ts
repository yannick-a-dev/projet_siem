import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService extends BaseService{
  getSubCategories: any;
  getCategorie: any;
  getCategories() {
    throw new Error('Method not implemented.');
  }


}
