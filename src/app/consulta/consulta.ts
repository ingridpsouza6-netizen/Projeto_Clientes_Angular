import { Component } from '@angular/core';
// trouxe o FormsModule para poder usar o campo de pesquisa
import { FormsModule } from '@angular/forms';
// trouxe o serviço cliente
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-consulta',
  imports: [FormsModule],
  templateUrl: './consulta.html',
  styleUrl: './consulta.css',
})
export class Consulta {

  // variável que vai guardar o nome digitado na pesquisa
  nomePesquisa: string = '';

  // variável que vai guardar o cliente que será editado
  clienteEditando: any = null;

  // o serviço fica disponível dentro da página consulta
  constructor(public clienteService: ClienteService) {
    console.log('ENTREI NA CONSULTA');
    console.log('Clientes na consulta:', this.clienteService.clientes);
  }

  // função responsável por pesquisar os clientes pelo nome
  clientesFiltrados() {
    return this.clienteService.clientes.filter(cliente =>
      cliente.nome.toLowerCase().includes(this.nomePesquisa.toLowerCase())
    );
  }

  // função responsável por selecionar o cliente para edição
  editar(cliente: any) {
    // essa linha faz a ligação para mostrar e receber as edições do cliente
    this.clienteEditando = cliente;

    console.log('Cliente escolhido para editar:', cliente);
  }

  // função responsável por salvar a alteração
  salvarAlteracao() {
    alert('Cliente alterado com sucesso!');

    this.clienteEditando = null;
  }

  // função responsável por excluir o cliente
  excluir(cliente: any) {
    const indice = this.clienteService.clientes.indexOf(cliente);

    if (indice !== -1) {
      this.clienteService.clientes.splice(indice, 1);

      alert('Cliente excluído com sucesso!');
    }
  }

}