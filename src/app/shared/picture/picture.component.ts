import { Component, Input, OnInit } from '@angular/core';
import { Galery } from 'src/app/galery/galery';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  @Input() picture: Galery;
  constructor() {
    this.picture = {
      id: 1,
      src: '',
      alt: ''
    };
  }

  ngOnInit(): void {
  }

}
