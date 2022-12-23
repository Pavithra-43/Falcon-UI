import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitializrComponent } from './initializr/initializr.component';
import { WireMockComponent } from './wire-mock/wire-mock.component';
import { MappingComponent } from './mapping/mapping.component';
import { InitializrFormComponent } from './initializr-form/initializr-form.component';
import { KarateToolComponent } from './karate-tool/karate-tool.component';
import { GatlingComponent } from './gatling/gatling.component';
import { OthersComponent } from './others/others.component';
import { KaratePipelineComponent } from './karate-pipeline/karate-pipeline.component';
import { MappingSampleComponent } from './mapping-sample/mapping-sample.component';
import { WiremockSwaggerComponent } from './wiremock-swagger/wiremock-swagger.component';


const routes: Routes = [
  // { path: 'introduction', redirectTo:"/introduction", pathMatch:"full" },
  { path: 'introduction', component: HomeComponent},
  // { path: 'initializr', redirectTo:"/initializr", pathMatch:"full" },
  { path: 'initializr', component: InitializrComponent},
  // { path: 'wiremock', redirectTo:"/wiremock", pathMatch:"full" },
  { path: 'wiremock', component: WireMockComponent},
  { path: 'mapping', component: MappingComponent},
  { path: 'initializer-form', component: InitializrFormComponent},
  {path: 'gatling',component:GatlingComponent},
  { path: 'others', component: OthersComponent},
  { path: 'karate-tool', component: KarateToolComponent},
  { path: 'karate-pipeline', component: KaratePipelineComponent},
  { path: 'stubs', component: MappingSampleComponent},
  { path: '', redirectTo:"/dashboard", pathMatch:"full" },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'swagger', component: WiremockSwaggerComponent},

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
export const routingComponents=[HomeComponent]




