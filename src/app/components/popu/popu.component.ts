import { Component, Input } from '@angular/core';
import { categoriesI } from 'src/app/models/films.interface';

@Component({
  selector: 'app-popu',
  templateUrl: './popu.component.html',
  styleUrls: ['./popu.component.scss']
})
export class PopuComponent {
  @Input() categorias!: categoriesI;
}
