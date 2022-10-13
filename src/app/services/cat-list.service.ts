import { CatItem } from './../interfaces/cat-item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatListService {
  private catList: CatItem[] = [
    // {id: 1, title: 'teste1', img: 'img1', description: 'teste descrição 1'},
    // {id: 2, title: 'teste2', img: 'img1', description: 'teste descrição 2'},
    // {id: 3, title: 'teste3', img: 'img1', description: 'teste descrição 3'},
    // {id: 4, title: 'teste4', img: 'img1', description: 'teste descrição 4'},
    // {id: 5, title: 'teste5', img: 'img1', description: 'teste descrição 5'},
    // {id: 6, title: 'teste6', img: 'img1', description: 'teste descrição 6'},
    // {id: 7, title: 'teste7', img: 'img1', description: 'teste descrição 7'},
  ]
  constructor(private http: HttpClient) { }

  public getCatList(): CatItem[] {
    const req = this.http.get<CatItem[]>('https://api.thecatapi.com/v1/images/search?limit=10');
    req.subscribe((resp) => {
      console.log(resp, 'resp')
      this.catList = resp;
    });
    return this.catList;
  }
}
