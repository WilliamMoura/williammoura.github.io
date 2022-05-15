import { Component, Input, OnInit } from '@angular/core';
import { ILotoFacil } from 'src/app/interfaces/iloto-facil';

@Component({
  selector: 'app-lotofacil',
  templateUrl: './lotofacil.component.html',
  styleUrls: ['./lotofacil.component.scss']
})
export class LotofacilComponent implements OnInit {
  public resultados: Array<ILotoFacil>;
  @Input() qtdJogos:number;
  verificarJogos: Array<number>;
  @Input() numeroJogo: number;
  constructor() {
    this.resultados = Array();
    this.qtdJogos = Number();
    this.verificarJogos = Array();
    this.numeroJogo = Number();
    /*
    for (let index = 1; index < 15; index++) {      
      this.gerarNumeros()
    }
    */
   }

  ngOnInit(): void {
  }

  public gerarJogos():void {
    for (let index = 0; index < this.qtdJogos; index++) {      
      this.gerarNumeros()
    }
  }

  private gerarNumeros():void {
    const min = Math.ceil(1);
    const max = Math.floor(25);
    let result = Array();
    let jogo:ILotoFacil;    
    while (result.length <= 7) {      
      let value = Math.floor(Math.random() * (max - min)) + min;
      if (value % 2 === 0 && ! result.includes(value)) {
        result.push(value);
      }
    }
    
    let result2 = Array();
    while (result2.length <= 6) {      
      let value = Math.floor(Math.random() * (max - min)) + min;
      if (value%2 !== 0 && ! result2.includes(value)) {
        result2.push(value);
      }
    }
    jogo = {'jogo': result.concat(result2)};
    this.resultados.push(jogo);    
  }

  public adicionarConferencia() {    
    this.verificarJogos.push(this.numeroJogo);    
  }

  public checarJogos () {
    this.resultados.forEach((resultado) => {
      resultado.qtdAcertos = 0;
      let qtdCertos = 0;
      this.verificarJogos.forEach((numero:number) => {
        let res = resultado.jogo.find((element) => {
          return element == numero
        })
        
        if (res) {
          qtdCertos ++;
        }
      })
      resultado.qtdAcertos = qtdCertos;
    })
  }
}
