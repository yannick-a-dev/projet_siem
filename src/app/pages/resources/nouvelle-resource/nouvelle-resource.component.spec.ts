import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleResourceComponent } from './nouvelle-resource.component';

describe('NouvelleResourceComponent', () => {
  let component: NouvelleResourceComponent;
  let fixture: ComponentFixture<NouvelleResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
