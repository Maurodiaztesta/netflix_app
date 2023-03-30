import { Component } from '@angular/core';
import { categoriesI } from './models/films.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';

  popularFilms: categoriesI = {
    section: "LOS 5 MÁS POPULARES HOY",
    films: [
      {
        title: "1-papel",
        image: "./assets/images/Top10/1-papel.webp"
      },
      {
        title: "2-reina",
        image: "./assets/images/Top10/2-reina.webp"
      },
      {
        title: "3-titanes",
        image: "./assets/images/Top10/3-titanes.webp"
      },
      {
        title: "4-lostinspace",
        image: "./assets/images/Top10/4-lostinspace.webp"
      },
      {
        title: "5-dondecaben",
        image: "./assets/images/Top10/5-dondecaben.webp"
      }
    ]
  }

  comedyFilms: categoriesI = {
    section: "COMEDIA",
    films: [
      {
        title: "casi300",
        image: "./assets/images/Comedia/casi300.webp"
      },
      {
        title: "cazafantasmas",
        image: "./assets/images/Comedia/cazafantasmas.webp"
      },
      {
        title: "dictador",
        image: "./assets/images/Comedia/dictador.webp"
      },
      {
        title: "erasehollywood",
        image: "./assets/images/Comedia/erasehollywood.webp"
      },
      {
        title: "family guy",
        image: "./assets/images/Comedia/family guy.webp"
      },
      {
        title: "laterminal",
        image: "./assets/images/Comedia/laterminal.webp"
      },
      {
        title: "padresella",
        image: "./assets/images/Comedia/padresella.webp"
      },
      {
        title: "regresofuturo",
        image: "./assets/images/Comedia/regresofuturo.webp"
      },
      {
        title: "rickandmorty",
        image: "./assets/images/Comedia/rickandmorty.webp"
      },
      {
        title: "scarymovie3",
        image: "./assets/images/Comedia/scarymovie3.webp"
      },
      {
        title: "ted2",
        image: "./assets/images/Comedia/ted2.webp"
      }
    ]
  }
  accionFilms: categoriesI = {
    section: "ACCIÓN",
    films: [
      {
        title: "ejercitomuertos",
        image: "./assets/images/Accion/ejercitomuertos.jpg"
      },
      {
        title: "elprotector",
        image: "./assets/images/Accion/elprotector.webp"
      },
      {
        title: "equalizer2",
        image: "./assets/images/Accion/equalizer2.webp"
      },
      {
        title: "heat",
        image: "./assets/images/Accion/heat.webp"
      },
      {
        title: "jackreacher",
        image: "./assets/images/Accion/jackreacher.webp"
      },
      {
        title: "johnwick2",
        image: "./assets/images/Accion/johnwick2.webp"
      },
      {
        title: "killbill2",
        image: "./assets/images/Accion/killbill2.webp"
      },
      {
        title: "misionimposiblenacion",
        image: "./assets/images/Accion/misionimposiblenacion.webp"
      },
      {
        title: "renacido",
        image: "./assets/images/Accion/renacido.webp"
      },
      {
        title: "terminator2",
        image: "./assets/images/Accion/terminator2.webp"
      },
      {
        title: "worldwarz",
        image: "./assets/images/Accion/worldwarz.webp"
      }
    ]
  }

  animeFilms: categoriesI = {
    section: "ANIME",
    films: [
      {
        title: "ajin",
        image: "./assets/images/Anime/ajin.jpg"
      },
      {
        title: "castilloambulante",
        image: "./assets/images/Anime/castilloambulante.webp"
      },
      {
        title: "chihiro",
        image: "./assets/images/Anime/chihiro.webp"
      },
      {
        title: "evangelion",
        image: "./assets/images/Anime/evangelion.webp"
      },
      {
        title: "gitsarise",
        image: "./assets/images/Anime/gitsarise.webp"
      },
      {
        title: "gundam",
        image: "./assets/images/Anime/gundam.webp"
      },
      {
        title: "laputa",
        image: "./assets/images/Anime/laputa.webp"
      },
      {
        title: "mononoke",
        image: "./assets/images/Anime/mononoke.webp"
      },
      {
        title: "ninokuni",
        image: "./assets/images/Anime/ninokuni.jpg"
      },
      {
        title: "perfectblue",
        image: "./assets/images/Anime/perfectblue.webp"
      },
      {
        title: "porcorosso",
        image: "./assets/images/Anime/porcorosso.webp"
      }
    ]
  }

  dramaFilms: categoriesI = {
    section: "DRAMA",
    films: [
      {
        title: "1917",
        image: "./assets/images/Drama/1917.webp"
      },
      {
        title: "arrival",
        image: "./assets/images/Drama/arrival.webp"
      },
      {
        title: "clublucha",
        image: "./assets/images/Drama/clublucha.webp"
      },
      {
        title: "corazones",
        image: "./assets/images/Drama/corazones.webp"
      },
      {
        title: "culpable",
        image: "./assets/images/Drama/culpable.jpg"
      },
      {
        title: "millaverde",
        image: "./assets/images/Drama/millaverde.webp"
      },
      {
        title: "naufrago",
        image: "./assets/images/Drama/naufrago.webp"
      },
      {
        title: "noespais",
        image: "./assets/images/Drama/noespais.webp"
      },
      {
        title: "salvaralsoldado",
        image: "./assets/images/Drama/salvaralsoldado.webp"
      },
      {
        title: "scarface",
        image: "./assets/images/Drama/scarface.webp"
      },
      {
        title: "schindler",
        image: "./assets/images/Drama/schindler.webp"
      }
    ]
  }

}
