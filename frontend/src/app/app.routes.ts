import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { EditarComponent } from './editar/editar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ApagarComponent } from './apagar/apagar.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'livros', component: ListarLivrosComponent, canActivate: [AuthGuard] },
    { path: 'editar/:id', component: EditarComponent, canActivate: [AuthGuard] },
    { path: 'apagar/:id', component: ApagarComponent, canActivate: [AuthGuard] },
    { path: 'cadastrar', component: CadastrarComponent, canActivate: [AuthGuard] },
  ];