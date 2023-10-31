import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IProducts } from '../pages/models/products';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private readonly API = environment.url;

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient
      .get<IProducts[]>(`${this.API}/products`)
      .pipe(first());
  }

  save(formValue: IProducts, id: string) {
    if (id) {
      return this.update(formValue, id);
    }
    return this.create(formValue);
  }

  loadById(id: number) {
    return this.httpClient.get<IProducts>(`${this.API}/products/${id}`);
  }

  private create(formValue: IProducts) {
    return this.httpClient.post<IProducts>(`${this.API}/products`, formValue);
  }

  private update(formValue: IProducts, id: string) {
    return this.httpClient.put<IProducts>(
      `${this.API}/products/${id}`,
      formValue
    );
  }

  remove(id: string) {
    return this.httpClient.delete<IProducts>(
      `${this.API}/products/${id}`
    );
  }
}
