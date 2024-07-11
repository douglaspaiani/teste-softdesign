import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LivrosService } from '../livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: '../login/login.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class CadastrarComponent {
  constructor(private LivrosService: LivrosService, private router: Router) { }
  livro = [
    { titulo: '', descricao: '', autor: '', qnt_paginas: ''}
  ];
  onSubmit() {
    this.LivrosService.cadastrar(this.livro).subscribe(success => {
      if (success.status == true) {
        this.router.navigate(['/livros']);
      } else {
        console.log(success);
      }
    });
  }
}
