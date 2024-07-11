import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/list`);
  }

  get(id: any[]): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get/`+id);
  }

  cadastrar(livro: any[]): Observable<any>  {
    return this.http.post(`${this.apiUrl}/cadastrar`, livro);
  }

  editar(livro: any[], id: number): Observable<any>  {
    return this.http.post(`${this.apiUrl}/editar/`+id, livro);
  }

  apagar(id: number): Observable<any>  {
    return this.http.post(`${this.apiUrl}/apagar/`+id, []);
  }

}
