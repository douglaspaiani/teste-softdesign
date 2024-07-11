import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-apagar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './apagar.component.html',
  styleUrl: './apagar.component.css'
})
export class ApagarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private LivrosService: LivrosService, private router: Router) { }
  id: any | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ApagarLivro(){
    this.LivrosService.apagar(this.id).subscribe(success => {
      if (success.status == true) {
        this.router.navigate(['/livros']);
      } else {
        console.log(success);
      }
    });
  }
}
