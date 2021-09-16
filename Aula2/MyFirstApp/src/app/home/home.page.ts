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

    // Propriedade que armazena uma string para alterar cor
    public cot = '';

    // Propriedade que utilizamos para calculos
    public ValorNumerico = 0;
    
    // Método para incrementar
    aumentar(): void {
      if (this.ValorNumerico <= 9){
        this.ValorNumerico ++;
      }
    }
    
    // Método para incrementar
    diminuir(): void {
      if (this.ValorNumerico > 0){
        this.ValorNumerico --;
      }
    }
}