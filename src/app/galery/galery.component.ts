import { Component, Input, OnInit } from '@angular/core';
import { Galery } from './galery';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {
  public listItem: Galery[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listItem = [
      {id: 1, src: '../../assets/img/IMG-20210925-WA0008.jpg', alt: 'test1'},
      {id: 2, src: '../../assets/img/IMG-20210925-WA0008.jpg', alt: 'test12'}
    ];
  }

}
