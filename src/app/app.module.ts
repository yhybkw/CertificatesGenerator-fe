import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { ImportListComponent } from './import-list/import-list.component';
import { CertificateCentreComponent } from './certificate-centre/certificate-centre.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutAppComponent } from './about-app/about-app.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddCandidateComponent,
    ViewCandidateComponent,
    UpdateCandidateComponent,
    ImportListComponent,
    CertificateCentreComponent,
    AboutAppComponent,
    ReportComponent
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
