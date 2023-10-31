import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServiceService } from '../services/service.service';
import { IProducts } from './models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<IProducts> {

  constructor(private service: ServiceService) {

  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProducts> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ id: '', name:'', category: ''});
  }
}
