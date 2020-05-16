import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarSnippetComponent } from './registrar-snippet/registrar-snippet.component';


const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch:'full'},
  //rutas de los rest 
  //{path: 'registar/loque sea', component: componentPertinente}
  {path: 'regSnippet', component: RegistrarSnippetComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
