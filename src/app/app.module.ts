import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarSnippetComponent } from './registrar-snippet/registrar-snippet.component';
import { ListarSnippetsComponent } from './listar-snippets/listar-snippets.component';
//call rest 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManejoAdminComponent } from './manejo-admin/manejo-admin.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { RegistarSerieComponent } from './registar-serie/registar-serie.component';
import { RegistarTemporadaComponent } from './registar-temporada/registar-temporada.component';
import { RegistarCapituloComponent } from './registar-capitulo/registar-capitulo.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarSnippetComponent,
    ListarSnippetsComponent,
    ManejoAdminComponent,
    PaginaInicioComponent,
    RegistarSerieComponent,
    RegistarTemporadaComponent,
    RegistarCapituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
