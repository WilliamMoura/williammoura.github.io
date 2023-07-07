import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {
  public resultados:Array<any>;
  constructor() {
    this.resultados = Array();
    for (let index = 1; index < 15; index++) {
      this.gerarNumeros()
    }
    console.log(this.resultados, 'resultados')
  }

  ngOnInit(): void {
  }

  private gerarNumeros():void {
    const min = Math.ceil(1);
    const max = Math.floor(25);
    let result = Array();

    while (result.length <= 8) {
      let value = Math.floor(Math.random() * (max - min)) + min;
      if (value % 2 === 0 && ! result.includes(value)) {
        console.log('ta vindo')
        console.log(result.length, 'tamanho')
        result.push(value);
      }
    }

    let result2 = Array();
    while (result2.length <= 7) {
      let value = Math.floor(Math.random() * (max - min)) + min;
      if (value%2 !== 0 && ! result2.includes(value)) {
        result2.push(value);
      }
    }
    let concat = result.concat(result2);
    this.resultados.push(concat);
  }

}
