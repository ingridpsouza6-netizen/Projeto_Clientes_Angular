import { Component } from '@angular/core';
// trouxe as ferramentas de formulário para usar no meu componente
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
// importando o ClienteService
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  constructor(public clienteService: ClienteService) {}

  formulario = new FormGroup({
    // criei meu formulário
    nome: new FormControl('', Validators.required),
    // adicionei o validators para deixar obrigatório colocar o nome
    email: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    dataNascimento: new FormControl('', Validators.required),
    uf: new FormControl('', Validators.required),
    municipio: new FormControl('', Validators.required)
  });

  cadastrar() {

    if (this.formulario.valid) {

      this.clienteService.clientes.push({
        nome: this.formulario.value.nome ?? '',
        email: this.formulario.value.email ?? '',
        cpf: this.formulario.value.cpf ?? '',
        dataNascimento: this.formulario.value.dataNascimento ?? '',
        uf: this.formulario.value.uf ?? '',
        municipio: this.formulario.value.municipio ?? ''
      });

      console.log(this.clienteService.clientes);

      alert('Cliente cadastrado com sucesso!');

      this.formulario.reset();
    }
  }
}











































































































} else {

  // Gera um novo ID.
  pessoa.id = this.pessoaService.tamanhoArray() + 1;

  // Adiciona a nova pessoa.
  this.pessoaService.adicionar(pessoa);

}

// Limpa os campos após salvar
this.limpaAtributos();
}

// Atualiza uma pessoa após confirmação.
alterar(pessoa: Pessoa) {

  // Exibe uma confirmação ao usuário.
  if (confirm("Tem certeza que deseja Alterar a Pessoa?")) {

    // Atualiza os dados da pessoa.
    this.pessoaService.editar(pessoa);
  }
}

carregaEstadosSelect() {
  this.ufMunicipioService.listaUF()
    .subscribe({
      next: (dadosUf) => {
        this.listaUFs = dadosUf
      },
      error: (msgErro) => {
        console.log('Erro ao carregar os Estados', msgErro)
      }
    })
}

carregandaMunicipiosSelect() {
  if(!this.uf){
    this.municipio= ''
    this.listaMunicipios = []

    return
  }

  this.ufMunicipioService.listaMunicipios(Number(this.uf))
  .subscribe({
    next: (dadosMunicipio) => {
      this.listaMunicipios = dadosMunicipio
    },
    error: (msgErro) => {
      console.log('Erro ao carregar os municípios: ' msgErro)
    }
  })
  }

  carregaMunícipiosSelect() {
    if(!this.uf) {
      this.municipio = ''
      this.listaMunicipios = []

      return
    }
    this.ufMunicipioService.listaMunicipios(Number(this.uf))
    .subscribe
    next: (dadosMunicipio) = 
  }




