import { Component } from '@angular/core';
// trouxe as ferramentas de formulário para usar no meu componente
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

// importando o ClienteService
import { ClienteService } from '../services/cliente.service';

// serviço para buscar Estados e Municípios
import { UfMunicipioService } from '../services/uf-municipios/uf-municipios-service';

// modelos de Estado e Município
import { Estado } from '../models/estado';
import { Municipio } from '../models/municipio';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  // Serviços utilizados pelo componente
  constructor(
    public clienteService: ClienteService,
    private ufMunicipioService: UfMunicipioService
  ) {

    // Carrega os Estados quando o componente inicia
    this.carregarEstados();
  }

  // Lista onde serão guardados os Estados
  listaUfs: Estado[] = [];

  // Lista onde serão guardados os Municípios
  municipios: Municipio[] = [];


  formulario = new FormGroup({

    // criei meu formulário
    nome: new FormControl('', Validators.required),

    // nome obrigatório e e-mail precisa ter formato válido
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    // adicionei o validators para deixar obrigatório
    cpf: new FormControl('', Validators.required),

    dataNascimento: new FormControl('', Validators.required),

    uf: new FormControl('', Validators.required),

    municipio: new FormControl('', Validators.required)
  });


  // Busca os Estados
  carregarEstados() {

    this.ufMunicipioService.listaUF().subscribe({

      next: (dados) => {

        // Guarda os Estados recebidos
        this.listaUfs = dados;

        console.log('Estados carregados:', this.listaUfs);
      },

      error: (erro) => {

        console.error('Erro ao carregar Estados:', erro);
      }

    });
  }


  // Busca os Municípios de acordo com a UF escolhida
  carregarMunicipios() {

    // Pega a UF escolhida no formulário
    const uf = this.formulario.value.uf;

    // Se nenhuma UF foi escolhida
    if (!uf) {

      this.municipios = [];

      return;
    }

    // Busca os municípios da UF escolhida
    this.ufMunicipioService.listaMunicipios(Number(uf)).subscribe({

      next: (dados) => {

        // Guarda os municípios recebidos
        this.municipios = dados;

        console.log('Municípios carregados:', this.municipios);
      },

      error: (erro) => {

        console.error('Erro ao carregar Municípios:', erro);
      }

    });
  }


  cadastrar() {

    // verifica se o formulário está válido
    if (this.formulario.valid) {

      // adiciona o cliente na lista
      this.clienteService.clientes.push({

        nome: this.formulario.value.nome ?? '',

        email: this.formulario.value.email ?? '',

        cpf: this.formulario.value.cpf ?? '',

        dataNascimento: this.formulario.value.dataNascimento ?? '',

        uf: this.formulario.value.uf ?? '',

        municipio: this.formulario.value.municipio ?? ''

      });

      // mostra os clientes no console
      console.log(this.clienteService.clientes);

      // mensagem de sucesso
      alert('Cliente cadastrado com sucesso!');

      // limpa o formulário
      this.formulario.reset();

      // limpa também a lista de municípios
      this.municipios = [];

    } else {

      // caso algum campo esteja inválido
      alert('Preencha todos os campos corretamente!');

    }
  }
}