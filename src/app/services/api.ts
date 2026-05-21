import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlFakestore = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<any> {
    return this.http.get(this.urlFakestore);
  }
}