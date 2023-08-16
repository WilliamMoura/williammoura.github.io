import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FiiService {

  constructor(private http: HttpClient, private fii:[]) { }

  public getCatList(cod:string): [] {
    const req = this.http.get<any[]>(`https://fiis.com.br/${cod}/`);
    req.subscribe((resp) => {
      console.log(resp, 'resp')
      // this.fii.push(resp);
      console.log(resp)
    });
    return this.fii;
  }
}
