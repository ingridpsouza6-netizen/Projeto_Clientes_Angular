import { Routes } from '@angular/router';
//trouxe o componete da página cadastro
import { Cadastro } from './cadastro/cadastro';
import { Consulta } from './consulta/consulta';


export const routes: Routes = [
  {
    //defini o endereço da página
    path: 'cadastro',
    //falei ao angular qual componete deve aparecer nessa rota
    component: Cadastro
  
},
{
  path: 'consulta',
  component: Consulta
}
];