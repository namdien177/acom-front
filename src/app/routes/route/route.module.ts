import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../views/home/home.component';
import { AppEntryComponent } from '../../app-entry/app-entry.component';
import { ErrorPageComponent } from '../../views/error-page/error-page.component';


const routes: Routes = [
  { path: '', component: AppEntryComponent, 
    children:[
      { path: 'home', component: HomeComponent},
      { path: 'homepage', redirectTo: 'home'},
      { path: '', redirectTo:'home', pathMatch: 'full'}
    ]
  },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RouteModule { }
