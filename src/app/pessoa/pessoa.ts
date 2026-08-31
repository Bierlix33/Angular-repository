import { Component } from '@angular/core';
import { Pessoa as PessoaModel } from './pessoa.model';

@Component({
  selector: 'app-pessoa',
  imports: [],
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css',
})
export class Pessoa {
  pessoas: PessoaModel[] = [
    {
      id: 1,
      nome: 'Ana Souza',
      curso: 'Engenharia de Computação',
      email: 'ana@exemplo.com',
      vinculo: 'aluno',
      ativo: true
    },
    {
      id: 2,
      nome: 'Bruno Lima',
      curso: 'Engenharia de Computação',
      email: 'bruno@exemplo.com',
      vinculo: 'professor',
      ativo: true
    },
    {
      id: 3,
      nome: 'Carlos Santos',
      curso: 'Análise e Desenvolvimento de Sistemas',
      email: 'carlos@exemplo.com',
      telefone: '71999999999',
      vinculo: 'aluno',
      ativo: true
    },
    {
      id: 4,
      nome: 'Daniela Oliveira',
      curso: 'Sistemas de Informação',
      email: 'daniela@exemplo.com',
      vinculo: 'convidado',
      ativo: false
    }
  ];
}