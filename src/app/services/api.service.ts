import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  private http = inject(HttpClient);

  getTodos(): Promise<any> {
    return lastValueFrom(
      this.http.get<any>('https://jsonplaceholder.typicode.com/todos'),
    )
  }

  addTodo(todo: any): Promise<any> {
    return lastValueFrom(
      this.http.post<any>('https://jsonplaceholder.typicode.com/todos', todo),
    )
  }
}
