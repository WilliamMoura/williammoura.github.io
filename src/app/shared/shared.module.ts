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
import { ModalAdicionarComponent } from './modal-adicionar/modal-adicionar.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TitleComponent,
    NavbarComponent,
    FooterComponent,
    PictureComponent,
    GaleryComponent,
    CardItemComponent,
    NavComponent,
    ModalAdicionarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    TitleComponent,
    NavbarComponent,
    FooterComponent,
    GaleryComponent,
    CardItemComponent,
    NavComponent,
    ModalAdicionarComponent
  ],
})
export class SharedModule { }
