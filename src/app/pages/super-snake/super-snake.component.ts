import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-snake',
  templateUrl: './super-snake.component.html',
  styleUrls: ['./super-snake.component.scss']
})
export class SuperSnakeComponent implements OnInit {
  @Input() posistionElement: number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
