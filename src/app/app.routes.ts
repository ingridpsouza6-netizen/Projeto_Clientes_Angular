import { Routes } from '@angular/router';
// trouxe o componente da página cadastro
import { Cadastro } from './cadastro/cadastro';
// trouxe o componente da página consulta
import { Consulta } from './consulta/consulta';

export const routes: Routes = [
  {
    // quando entrar apenas em localhost:4200
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full'
  },
  {
    // defini o endereço da página
    path: 'cadastro',
    // falei ao Angular qual componente deve aparecer nessa rota
    component: Cadastro
  },
  {
    // defini o endereço da página consulta
    path: 'consulta',
    // falei ao Angular qual componente deve aparecer nessa rota
    component: Consulta
  }
];