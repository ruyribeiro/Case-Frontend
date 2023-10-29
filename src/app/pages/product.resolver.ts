import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServiceService } from '../services/service.service';
import { Products } from './models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Products> {

  constructor(private service: ServiceService) {

  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Products> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ code: '', name:'', category: ''});
  }
}
