import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICategory } from 'src/app/interfaces/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public async index() {
    let data: ICategory[] = [];
    await this.http.get<ICategory[]>('https://api.thecatapi.com/v1/images/search?limit=10')
    .subscribe((response) => {      
      data = response
    });
    return data
  }
}
