import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  public picture:any;
  constructor() { 
    this.picture.alt = 'alt test';
    this.picture.src = '';
  }

  ngOnInit(): void {
  }

}
