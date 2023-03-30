import { Component, Input } from '@angular/core';
import { filmI } from 'src/app/models/films.interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
  @Input() pelicula!: filmI;
}
