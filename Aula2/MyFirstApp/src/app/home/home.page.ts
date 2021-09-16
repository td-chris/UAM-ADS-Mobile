// Importação do decorator que sera utilizado para criar componentes.
// Este decorator faz parte do núcleio do angular.
import { Component } from '@angular/core';

  // Interface criada: para servir de base para a propriedade "pessoa"
  interface IPessoa {
    nome: string;
    sobrenome: string;
  }
  

// decorator do Angular responsavel por criar os componentes
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
  // Criação da classe que serve de base para nosso componente home

export class HomePage {

    // Propriedade utilizada no primeiro exemplo de interpolação
    public texto = 'Boa noite pessoal, vamos começar o trabalho?'

    public pessoa : IPessoa = {
      nome : 'ze',
      sobrenome : 'netto'
    }
  
}
