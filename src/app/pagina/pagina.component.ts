import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardPagina, PAGINAS } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  infoPagina: CardPagina;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const rota = this.route.snapshot.url[0].path;
    this.infoPagina = PAGINAS.find(p => p.rota.includes(rota));
  }

}
