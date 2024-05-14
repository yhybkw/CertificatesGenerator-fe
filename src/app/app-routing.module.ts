import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';

const routes: Routes = [
  {path: 'list', component : ListComponent},
  {path: '', redirectTo: 'list', pathMatch:'full'},
  {path: 'add', component: AddCandidateComponent},
  {path: 'update/:candidateId', component: UpdateCandidateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
