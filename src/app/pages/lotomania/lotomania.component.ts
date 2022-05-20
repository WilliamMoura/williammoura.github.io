import { Ilotomania } from './../../interfaces/ilotomania';
import { Component, Input, OnInit } from '@angular/core';
import { Ijogo } from 'src/app/interfaces/ijogo';

@Component({
  selector: 'app-lotomania',
  templateUrl: './lotomania.component.html',
  styleUrls: ['./lotomania.component.scss']
})
export class LotomaniaComponent implements OnInit {
  public resultados: Array<Ilotomania>;
  @Input() qtdJogos:number;
  verificarJogos: Array<number>;
  @Input() numeroJogo: number;
  constructor() {
    this.resultados = Array();
    this.numeroJogo = Number();
    this.verificarJogos = Array();
    this.qtdJogos = Number();
  }

  ngOnInit(): void {
  }

  private gerarNumeros():void {
    const min = Math.ceil(0);
    const max = Math.floor(99);
    let result:Array<Ijogo> = Array();
    let jogo:Ilotomania;
    while (result.length <= 50) {
      let value = Math.floor(Math.random() * (max - min)) + min;
      let joguinho:Ijogo;
      joguinho = { 'numero': value, 'verificado': false };
      if (! this.verificarItemArray(result ,joguinho)) {
        result.push(joguinho);
      }
    }
    jogo = {'jogo': result};
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

  public gerarJogos():void {
    for (let index = 0; index < this.qtdJogos; index++) {
      this.gerarNumeros()
    }
  }
}
