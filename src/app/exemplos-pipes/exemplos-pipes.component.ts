import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  // Parâmetros e pipes aninhados
  livro: any = {
    titulo: 'Learning Javascript Data Structures and Algorithms 2nd ed',
    rating: '4.54321',
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamente: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  
  //Pipe puro
  livros: string[] = ['Java', 'Angular 2', 'Javascript'];
  filtro!: string;

  addCurso(valor: string){
    this.livros.push(valor);
    console.log(this.livros);
  }


  // Pipe impuro
  obterCursos() {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if ((v: string) => v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }


  // Pipe async 
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAsync2 = interval(4000).pipe(map(valor => 'Valor assíncrono 2'));

  constructor() { }

  ngOnInit(): void {
  }

}
