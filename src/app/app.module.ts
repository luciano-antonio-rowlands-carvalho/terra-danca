import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { CursosOnLineComponent } from './cursos-on-line/cursos-on-line.component';
import { ParaCriancasComponent } from './para-criancas/para-criancas.component';
import { ParaAdultosComponent } from './para-adultos/para-adultos.component';
import { IntervencoesArtisticasComponent } from './intervencoes-artisticas/intervencoes-artisticas.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    CursosOnLineComponent,
    ParaCriancasComponent,
    ParaAdultosComponent,
    IntervencoesArtisticasComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
