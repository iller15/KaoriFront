import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarSnippetComponent } from './registrar-snippet/registrar-snippet.component';
import { ManejoAdminComponent } from './manejo-admin/manejo-admin.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { RegistarSerieComponent } from './registar-serie/registar-serie.component';
import { RegistarTemporadaComponent } from './registar-temporada/registar-temporada.component';
import { RegistarCapituloComponent } from './registar-capitulo/registar-capitulo.component';
import { ListarSerieComponent } from './listar-serie/listar-serie.component';


const routes: Routes = [
  {path: '', component: PaginaInicioComponent},
  //rutas de los rest 
  //{path: 'registar/loque sea', component: componentPertinente}
  {path: 'regSnippet', component: RegistrarSnippetComponent},
  {path: 'manejoAdmin', component: ManejoAdminComponent},
  {path: 'regSerie', component: RegistarSerieComponent},
  {path: 'regTemporada', component: RegistarTemporadaComponent},
  {path: 'regCapitulo', component: RegistarCapituloComponent},
  {path: 'listSerie', component: ListarSerieComponent}



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
