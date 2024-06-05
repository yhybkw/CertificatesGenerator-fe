import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { ReportComponent } from './report/report.component';
import { CertificateCentreComponent } from './certificate-centre/certificate-centre.component';

const routes: Routes = [
  {path: 'home', component: CertificateCentreComponent},
  {path: 'list', component : ListComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'update/:candidateId', component: UpdateCandidateComponent},
  {path: 'candidate/:candidateId', component: ViewCandidateComponent},
  {path: 'about', component: AboutAppComponent},
  {path: 'report', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
