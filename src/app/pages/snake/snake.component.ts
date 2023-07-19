import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {
  public resultados:Array<any>;
  public qtdJogos = 0;
  public proporcao = 60;
  constructor() {
    this.resultados = Array();
  }

  ngOnInit(): void {
  }

  private gerarNumeros():void {
    const min = Math.ceil(1);
    const max = Math.floor(26);
    let result = Array();
    let pares = Math.round((15/100) * this.proporcao);
    if (pares > 11) {
      pares = 11;
    }
    let impares = 15 - pares;    
    while (result.length < pares) {
      let value = Math.floor(Math.random() * (max - min)) + min;
      if (value % 2 === 0 && ! result.includes(value)) {
        result.push(value);
      }
    }

    let result2 = Array();
    while (result2.length < impares) {
      let value = Math.floor(Math.random() * (max - min)) + min;
      if (value%2 !== 0 && ! result2.includes(value)) {
        result2.push(value);
      }
    }
    let concat = result.concat(result2);
    concat.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    })
    this.resultados.push(concat);
  }

  public gerarJogos(): void {    
    this.resultados = Array();
    for (let index = 0; index < this.qtdJogos; index++) {      
      this.gerarNumeros();
    }
  }

}
