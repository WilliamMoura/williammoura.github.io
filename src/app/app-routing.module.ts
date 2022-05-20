import { LotomaniaComponent } from './pages/lotomania/lotomania.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleryComponent } from './galery/galery.component';
import { AboutComponent } from './pages/about/about.component';
import { LotofacilComponent } from './pages/lotofacil/lotofacil.component';
import { SnakeComponent } from './pages/snake/snake.component';

const routes: Routes = [
  { path: 'galery', component: GaleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'snake', component: SnakeComponent },
  { path: 'lotofacil', component: LotofacilComponent },
  { path: 'lotomania', component: LotomaniaComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
