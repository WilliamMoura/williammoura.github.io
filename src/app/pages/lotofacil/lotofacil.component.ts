import { Ijogo } from './../../interfaces/ijogo';
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
    let result:Array<Ijogo> = Array();
    let jogo:ILotoFacil;
    while (result.length <= 7) {
      let value = Math.floor(Math.random() * (max - min)) + min;
      let joguinho:Ijogo;
      joguinho = { 'numero': value, 'verificado': false };
      if (value % 2 === 0 && ! this.verificarItemArray(result ,joguinho)) {
        result.push(joguinho);
      }
    }

    let result2:Array<Ijogo> = Array();
    while (result2.length <= 6) {
      let value = Math.floor(Math.random() * (max - min)) + min;
      let joguinho:Ijogo;
      joguinho = { 'numero': value, 'verificado': false };
      if (value%2 !== 0 && ! this.verificarItemArray(result2 ,joguinho)) {
        result2.push(joguinho);
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
          return element.numero == numero
        })
        console.log(res, 'res')
        if (res) {
          res.verificado = true
          qtdCertos ++;
        }
      })
      resultado.qtdAcertos = qtdCertos;
    })
  }

  public cleanGames(): void {
    this.resultados = Array();
  }

  private verificarItemArray(lista: Array<Ijogo>, joguinho: Ijogo): boolean {
    let verify = lista.find((item) => {
      return item.numero === joguinho.numero
    });
    if (verify) {
      return true;
    }
    return false;
  }
}
