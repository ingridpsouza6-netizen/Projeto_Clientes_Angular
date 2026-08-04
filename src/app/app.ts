import { Component, signal } from '@angular/core';
//importação para as duas páginas(CADASTRO E CONSULTA) aparecerem
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Cadastro_Clientes_Ingrid');
}
