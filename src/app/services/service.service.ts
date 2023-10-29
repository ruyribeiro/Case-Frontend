import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Products } from '../pages/models/products';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private readonly API = environment.url;

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient
      .get<Products[]>(`${this.API}/products`)
      .pipe(first());
  }

  save(formValue: Products, id?: number) {
    if (id) {
      return this.update(formValue, id);
    }
    return this.create(formValue);
  }

  loadById(id: number) {
    return this.httpClient.get<Products>(`${this.API}/products/${id}`);
  }

  private create(formValue: Products) {
    return this.httpClient.post<Products>(`${this.API}/products`, formValue);
  }

  private update(formValue: Products, id: number) {
    return this.httpClient.put<Products>(
      `${this.API}/products/${id}`,
      formValue
    );
  }

  remove(id: number) {
    return this.httpClient.delete<Products>(
      `${this.API}/products/${id}`
    );
  }
}
