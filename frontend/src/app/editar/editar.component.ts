import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivrosService } from '../livros.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: '../login/login.component.css',
})
export class EditarComponent implements OnInit {
  livroId: any | null = null;
  edit: any | null = null;

  constructor(private route: ActivatedRoute, private LivrosService: LivrosService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.livroId = params.get('id');
      this.LivrosService.get(this.livroId).subscribe(data => {
        this.edit = data;
      });
    });
  }

  onSubmit(){
    this.LivrosService.editar(this.edit, this.livroId).subscribe(data => {
      if (data.status == true) {
        this.router.navigate(['/livros']);
      } else {
        console.log(data);
      }
    });
  }
}
