import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecteDetailComponent } from './selecte-detail.component';

describe('SelecteDetailComponent', () => {
  let component: SelecteDetailComponent;
  let fixture: ComponentFixture<SelecteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecteDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
