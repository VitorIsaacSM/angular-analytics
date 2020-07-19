import { Component, OnInit } from '@angular/core';

export interface CardPagina {
  tituloRota: string;
  rota: string;
  imagem: string;
  id: string;
}

export const PAGINAS: CardPagina[] = [
  {
    tituloRota: 'Laptop',
    rota: 'pagina/laptop',
    imagem: 'assets/laptop.jpg',
    id: '',
  },
  {
    tituloRota: 'Estrada',
    rota: 'pagina/estrada',
    imagem: 'assets/estrada.jpg',
    id: '',
  },
  {
    tituloRota: 'Bosque',
    rota: 'pagina/bosque',
    imagem: 'assets/bosque.jpg',
    id: '',
  },
  {
    tituloRota: 'Lago',
    rota: 'pagina/lago',
    imagem: 'assets/lago.jpg',
    id: '',
  }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  paginas: CardPagina[] = PAGINAS;

  constructor() { }

  ngOnInit(): void {
  }
}
