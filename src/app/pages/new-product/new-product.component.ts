import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Products } from '../models/products';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private location: Location,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
    ) {
    this.form = this.formBuilder.group({
      code: [null],
      name: [null],
      category: [null]
    })
  }

  ngOnInit(): void {
    const product: Products = this.route.snapshot.data['product'];
    this.form.setValue({
      code: product.code,
      name: product.name,
      category: product.category
    })
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    const teste: Products = this.route.snapshot.data['product']
    this.service.save(this.form.value, teste.id).subscribe(result => this.onSuccess(), error =>  this.onError());
  }

  private onSuccess() {
    this.snackBar.open('Produto salvo com sucesso!', '', {duration: 5000});
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar o produto =(', '', {duration: 5000});
  }
}
