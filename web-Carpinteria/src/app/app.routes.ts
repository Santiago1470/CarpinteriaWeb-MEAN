import { Routes } from '@angular/router';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { LoginComponent } from './autenticacion/login/login.component';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "catalogo", component: CatalogoComponent }
];
