import { Ifii } from './interfaces/ifii';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiisService {
  apiUrl = `${environment.api_url}fiis`;
  constructor(private httpClient: HttpClient) { }

  public index(): Observable<Ifii[]>
  {
    return this.httpClient.get<Ifii[]>(this.apiUrl);
  }
}
