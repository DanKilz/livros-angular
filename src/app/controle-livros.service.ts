import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})

export class ControleLivrosService {
  livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: "Use a Cabeça: Java", resumo: "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (POO) e Java.", autores: ["Bert Bates", "Kathy Sierra"] },
    { codigo: 2, codEditora: 2, titulo: "Java, como Programar", resumo: "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros dos Deitel.", autores: ["Paul Deitel", "Hervey Deitel"] },
    { codigo: 3, codEditora: 3, titulo: "Core Java for the Impacient", resumo: "Leitores familiarizados com a série original de dois volumes de Horstmann, 'Core Java', que buscam um guia comprensível, mas condensado para todas as novidades de Java SE 9 aprenderão como essas novidades afetam a linguagem e suas bibliotecas essenciais.", autores: ["Cay Horstmann"] }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(livro => livro.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);

    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
