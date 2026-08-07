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