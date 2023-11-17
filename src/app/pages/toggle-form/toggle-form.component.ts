import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/columns';

@Component({
  selector: 'app-toggle-form',
  templateUrl: './toggle-form.component.html',
  styleUrls: ['./toggle-form.component.scss'],
})
export class ToggleFormComponent {
  @Input() itens: Item[] = []

  selectedItens: Item[] = [];

  toggleSelection(item: Item) {
    const index = this.selectedItens.indexOf(item);

    if (index === -1) {
      this.selectedItens.push(item);
    } else {
      this.selectedItens.splice(index, 1);
    }
  }

  calcularValorTotal(): number {
    const itensSelecionados = this.selectedItens.length > 0
      ? this.selectedItens
      : [];

    return itensSelecionados.reduce((total, item) => total + item.updatedValue, 0);
  }

  selectAll(event: Event) {
    const checkbox = event.target as HTMLInputElement;

    if (checkbox.checked) {
      this.selectedItens = [...this.itens];
    } else {
      this.selectedItens = []
    }

  }
}
