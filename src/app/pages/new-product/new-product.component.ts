import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProducts } from '../models/products';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  form: FormGroup;

  titlePage = 'Inclusão de Produtos';
  buttonText = 'Criar Produto';

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private location: Location,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
    ) {
    this.form = this.formBuilder.group({
      id: [null, Validators.required],
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      category: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    const product: IProducts = this.route.snapshot.data['product'];
    this.form.setValue({
      id: product.id,
      name: product.name,
      category: product.category
    })

    this.pageDescription();
  }

  pageDescription() {
    const route = this.route.snapshot.url[0].path;
    if ( route != 'new-product') {
      this.form.get('id')?.disable();
      this.titlePage = 'Alteração de Produtos';
      this.buttonText = 'Alterar Produto';
    }
  }

  teste() {
    return true
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    const teste: IProducts = this.route.snapshot.data['product']
    this.service.save(this.form.value, teste.id).subscribe(result => this.onSuccess(), error =>  this.onError());
  }

  private onSuccess() {
    this.snackBar.open('Produto salvo com sucesso!', '', {duration: 5000});
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar o produto =(', '', {duration: 5000});
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('required')) {
      return 'Campo obrigatório.'
    }

    if (field?.hasError('minlength')) {
      const requiredLength = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Campo precisa de no mínimo ${requiredLength} caracteres.`
    }

    if (field?.hasError('maxlength')) {
      const requiredLength = field.errors ? field.errors['maxlength']['requiredLength'] : 100;
      return `Campo pode ter no máximo ${requiredLength} caracteres.`
    }

    return 'Campo inválido'
  }
}
