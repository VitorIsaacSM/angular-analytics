import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaComponent } from './pagina/pagina.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'pagina',
    children: [
      {
        path: 'laptop',
        component: PaginaComponent
      },
      {
        path: 'estrada',
        component: PaginaComponent
      },
      {
        path: 'bosque',
        component: PaginaComponent
      },
      {
        path: 'lago',
        component: PaginaComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
