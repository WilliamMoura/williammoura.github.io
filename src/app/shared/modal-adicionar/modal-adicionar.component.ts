import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-modal-adicionar',
  templateUrl: './modal-adicionar.component.html',
  styleUrls: ['./modal-adicionar.component.scss']
})
export class ModalAdicionarComponent implements OnInit {
  @Input() title: string;
  @Output() visible:boolean = true;
  data:string = '';
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { 
    this.title = ''
  }

  ngOnInit(): void {
  }

  public open(): void {
    this.visible = true;
  }

  public close():void {
    this.visible = false;
    console.log(this.visible, 'visible no close');
    this.data = '';
  }

  public salvar(): boolean {
    this.newItemEvent.emit(this.data)
    return true;
  }


}
