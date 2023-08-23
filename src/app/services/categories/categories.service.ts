import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICategory } from 'src/app/interfaces/icategory';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public index(): Observable<ICategory[]> {    
    return this.http.get<ICategory[]>(`${environment.api_url}category`);
  }

  public store(category: ICategory) {
    return this.http.post(`${environment.api_url}category`, category)
  }
}
