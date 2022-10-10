import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { SnakeComponent } from './snake/snake.component';
import { LotofacilComponent } from './lotofacil/lotofacil.component';
import { OnlyNumberDirective } from './../directives/only-number.directive';
import {MatIconModule} from '@angular/material/icon';
import { LotomaniaComponent } from './lotomania/lotomania.component';
import { FiisComponent } from './fiis/fiis.component';
import { HttpClientModule } from '@angular/common/http';
import { CatListComponent } from './cat-list/cat-list.component';


@NgModule({
  declarations: [
    AboutComponent,
    SnakeComponent,
    LotofacilComponent,
    OnlyNumberDirective,
    LotomaniaComponent,
    FiisComponent,
    CatListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatIconModule,
    HttpClientModule
  ]
})
export class PagesModule { }
