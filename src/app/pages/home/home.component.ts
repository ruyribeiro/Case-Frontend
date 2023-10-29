import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Products } from '../models/products';
import { ServiceService } from '../../services/service.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmationComponent } from 'src/app/components/modal-confirmation/modal-confirmation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Observable<Products[]>;
  displayedColumns = ['code', 'name', 'category', 'actions'];

  constructor(
    private productsService: ServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
    ) {
    this.products = this.productsService.list();
  }



  ngOnInit(): void {
  }

  refresh() {
    this.products = this.productsService.list();

  }

  onNewProduct() {
    this.router.navigate(['new-product'], {relativeTo: this.route})
  }

  onEdit(product: Products) {
    this.router.navigate(['edit', product.id], {relativeTo: this.route})
  }

  onDelete(product: Products) {

    const modalRef = this.dialog.open(ModalConfirmationComponent, {
      data: 'Tem certeza que quer excluir?'
    })

    modalRef.afterClosed().subscribe((result:boolean) =>{
    if(result) {
      this.productsService.remove(product.id!).subscribe(
        () => {
          this.snackBar.open('Produto excluido com sucesso!', 'X', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['mat-toolbar', 'mat-accent']
          });
          this.refresh()
        }
      );
    }
  })
  }
}
