import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]
})

export class LoginComponent {
  credentials = [
    { username: '' },
    { password: '' }
  ];

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    const credentials = [{
      username: this.credentials[0].username,
      password: this.credentials[1].password
  }];
      this.authService.login(credentials).subscribe(success => {
        if (success.status == true) {
          this.authService.logged(Math.random().toString(16).substr(2));
          this.router.navigate(['/livros']);
        } else {
          console.log(success);
          this.errorMessage = 'Invalid username or password';
        }
      });
    }
}
