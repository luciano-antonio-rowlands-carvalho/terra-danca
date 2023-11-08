import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { CursosOnLineComponent } from './cursos-on-line/cursos-on-line.component';
import { ParaCriancasComponent } from './para-criancas/para-criancas.component';
import { ParaAdultosComponent } from './para-adultos/para-adultos.component';
import { IntervencoesArtisticasComponent } from './intervencoes-artisticas/intervencoes-artisticas.component';
import { ContatoComponent } from './contato/contato.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota padrão (página inicial)
  // Adicione outras rotas aqui, por exemplo:
  // { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent},
  { path: 'cursos-on-line', component: CursosOnLineComponent},
  { path: 'para-criancas', component: ParaCriancasComponent},
  { path: 'para-adultos', component: ParaAdultosComponent},
  { path: 'intervencoes-artisticas', component: IntervencoesArtisticasComponent},
  { path: 'contato', component: ContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
