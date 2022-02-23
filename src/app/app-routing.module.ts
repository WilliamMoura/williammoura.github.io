import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleryComponent } from './galery/galery.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: 'galery', component: GaleryComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
