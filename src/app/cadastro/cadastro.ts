import { Component } from '@angular/core';
//trouxe as ferramentas de formulário para usar no meu componente
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  formulario = new FormGroup({
    //criei meu formulário 
    nome: new FormControl('', Validators.required),
    //adicionei o validators para deixar obrigatório colocar o nome
    email: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    dataNascimento: new FormControl('', Validators.required),
    uf: new FormControl('', Validators.required),
    municipio: new FormControl('', Validators.required)
  });
}