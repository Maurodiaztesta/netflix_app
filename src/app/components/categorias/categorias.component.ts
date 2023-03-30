import { categoriesI } from './../../models/films.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {
  @Input() categorias!: categoriesI;
}
