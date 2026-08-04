import { Component } from '@angular/core';
//trouxe as ferramentas de formulário para usar no meu componente
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  formulario = new FormGroup({
    //criei meu formulário 
    nome: new FormControl(''),
    email: new FormControl(''),
    cpf: new FormControl(''),
    dataNascimento: new FormControl(''),
    uf: new FormControl(''),
    municipio: new FormControl('')
  });

}