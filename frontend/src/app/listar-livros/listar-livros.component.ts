import { Component, OnInit } from '@angular/core';
import { LivrosService } from './../livros.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['../login/login.component.css'],
  standalone: true,
  imports: [RouterLink, CommonModule]
})
export class ListarLivrosComponent implements OnInit {
  livros: any[] = [];
  erro: string = '';

  constructor(private LivrosService: LivrosService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.carregarLivros();
  }

  carregarLivros() {
    this.LivrosService.listar().subscribe(
      (data) => {
        this.livros = data;
      },
      (error) => {
        console.error('Erro ao carregar livros:', error);
        this.erro = 'Erro ao carregar livros. Tente novamente.';
      }
    );
  }

  Logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
