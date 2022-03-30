import { AppRoutingModule } from './../app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { TitleComponent } from './title/title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PictureComponent } from './picture/picture.component';
import { GaleryComponent } from '../galery/galery.component';
import { CardItemComponent } from './card-item/card-item.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    TitleComponent,
    NavbarComponent,
    FooterComponent,
    PictureComponent,
    GaleryComponent,
    CardItemComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule
  ],
  exports: [
    TitleComponent,
    NavbarComponent,
    FooterComponent,
    GaleryComponent,
    CardItemComponent,
    NavComponent
  ],
})
export class SharedModule { }
