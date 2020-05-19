import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarSnippetComponent } from './registrar-snippet/registrar-snippet.component';
import { ManejoAdminComponent } from './manejo-admin/manejo-admin.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';


const routes: Routes = [
  {path: '', component: PaginaInicioComponent},
  //rutas de los rest 
  //{path: 'registar/loque sea', component: componentPertinente}
  {path: 'regSnippet', component: RegistrarSnippetComponent},
  {path: 'manejoAdmin', component: ManejoAdminComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
