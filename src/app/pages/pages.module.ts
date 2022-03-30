import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { SnakeComponent } from './snake/snake.component';



@NgModule({
  declarations: [
    AboutComponent,
    SnakeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
