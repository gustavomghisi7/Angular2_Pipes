import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning Javascript Data Structures and Algorithms 2nd ed',
    rating: '4.54321',
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamente: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Java', 'Angular 2', 'Javascript'];
  filtro!: string;

  addCurso(valor: string){
    this.livros.push(valor);
    console.log(this.livros);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
