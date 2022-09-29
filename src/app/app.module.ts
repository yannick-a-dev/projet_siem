import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MainResourcesComponent } from './pages/resources/main-resources/main-resources.component';
import { HeaderComponent } from './composants/header/header.component';
import { ResourcesDetailComponent } from './composants/resources-detail/resources-detail.component';
import { SelecteDetailComponent } from './composants/selecte-detail/selecte-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouvelleResourceComponent } from './pages/resources/nouvelle-resource/nouvelle-resource.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainResourcesComponent,
    HeaderComponent,
    ResourcesDetailComponent,
    SelecteDetailComponent,
    NouvelleResourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatRippleModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
