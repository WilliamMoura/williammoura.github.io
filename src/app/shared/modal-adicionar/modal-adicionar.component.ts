import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-adicionar',
  templateUrl: './modal-adicionar.component.html',
  styleUrls: ['./modal-adicionar.component.scss']
})
export class ModalAdicionarComponent implements OnInit {
  @Input() title: string;
  constructor() { 
    this.title = ''
  }

  ngOnInit(): void {
  }

}
