import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PictureComponent } from './picture/picture.component';
import { GaleryComponent } from '../galery/galery.component';
import { CardItemComponent } from './card-item/card-item.component';

@NgModule({
  declarations: [
    TitleComponent,
    NavbarComponent,
    FooterComponent,
    PictureComponent,
    GaleryComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports: [
    TitleComponent,
    NavbarComponent,
    FooterComponent,
    GaleryComponent,
    CardItemComponent
  ],
})
export class SharedModule { }
