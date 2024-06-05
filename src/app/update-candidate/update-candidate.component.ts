import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { Candidate } from '../candidate';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrl: './update-candidate.component.css'
})
export class UpdateCandidateComponent implements OnInit {

  candidateId: number;
  candidate: Candidate = new Candidate();

  constructor(private candidateService: CandidateService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.candidateId = this.route.snapshot.params['candidateId'];
    this.candidateService.getCandidateById(this.candidateId).subscribe(data => {
      this.candidate = data;
    }, error => console.log(error));
  }

  
  onSubmit3(){
    this.candidateService.updateCandidate(this.candidateId, this.candidate).subscribe( data =>{
      this.goToCandidateList();
    }
    , error => console.log(error));
  }
  goToCandidateList(){
    this.router.navigate(['/list'])
      }

}
