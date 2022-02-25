import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() title: string;
  @Input() src: string;
  @Input() alt: string;
  @Input() progress: number;
  constructor() {
    this.title = '';
    this.src = '';
    this.alt = '';
    this.progress = 0;
  }

  ngOnInit(): void {
  }

}
