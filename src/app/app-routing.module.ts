import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainResourcesComponent } from './pages/resources/main-resources/main-resources.component';
import { NouvelleResourceComponent } from './pages/resources/nouvelle-resource/nouvelle-resource.component';

const routes: Routes = [
  {path: 'mainresource', component: MainResourcesComponent},
 {path:'nouvelleresource', component: NouvelleResourceComponent},
 {path:'', redirectTo: 'mainresource', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
