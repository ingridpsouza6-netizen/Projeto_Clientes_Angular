//O angular normalmente usa injectable que permite que o Angular reconheça essa classe
import { Injectable } from '@angular/core';
//estou trazendo a interface Cliente que criei anteriormente.
import { Cliente } from '../models/cliente';
//informei ao Angular que esse serviço pode ser utilizado pela aplicação inteira.
@Injectable({
  providedIn: 'root'
})
//criei minha classe de serviço
export class ClienteService {
//ARRAY
  clientes: Cliente[] = [];

}