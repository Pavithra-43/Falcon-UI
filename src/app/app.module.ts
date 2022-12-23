import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitializrComponent } from './initializr/initializr.component';
import { WireMockComponent } from './wire-mock/wire-mock.component';
import { MappingComponent } from './mapping/mapping.component';
import { InitializrFormComponent } from './initializr-form/initializr-form.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KarateToolComponent } from './karate-tool/karate-tool.component';
import { GatlingComponent } from './gatling/gatling.component';
import { OthersComponent } from './others/others.component';
import { HttpClientModule } from '@angular/common/http';
import { KaratePipelineComponent } from './karate-pipeline/karate-pipeline.component';
import { MappingSampleComponent } from './mapping-sample/mapping-sample.component';
import { MappingBoxComponent } from './mapping-box/mapping-box.component';
import { WiremockSwaggerComponent } from './wiremock-swagger/wiremock-swagger.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  entryComponents:[
    DialogBoxComponent,
    InitializrFormComponent,
    KarateToolComponent,
    WiremockSwaggerComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    InitializrComponent,
    WireMockComponent,
    MappingComponent,
    InitializrFormComponent,
    DialogBoxComponent,
    KarateToolComponent,
    GatlingComponent,
    OthersComponent,
    KaratePipelineComponent,
    MappingSampleComponent,
    MappingBoxComponent,
    WiremockSwaggerComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgSelectModule,
    MDBBootstrapModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
