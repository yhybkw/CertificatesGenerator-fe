import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  candidates: Candidate[];

  // updateCandidate
  candidateId: number;
  candidate: Candidate = new Candidate();

  constructor(private candidateService: CandidateService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCandidates();

    // updateCandidate
    this.candidateId = this.candidate.candidateId
    this.candidateService.getCandidateById(this.candidateId).subscribe(data => {
      this.candidate = data;
    }, error => console.log(error));
  }

  private getCandidates() {
    this.candidateService.getList().subscribe(data => {
      this.candidates = data;
    });
  }

  updateCandidate(candidateId: number) {
    this.router.navigate(['update', candidateId]);
  }

  
    // updateCandidate Modal
  popup2() {
    const modalDiv = document.getElementById('Modal2')
    if (modalDiv != null) {
      modalDiv.style.display = 'block'
    }
  }

  closePopup2() {
    const modalDiv = document.getElementById('Modal2')
    if (modalDiv != null) {
      modalDiv.style.display = 'none'
    }
  }

  onSubmit2() {
    this.candidateService.updateCandidate(this.candidateId, this.candidate).subscribe(data => {
      this.goToCandidateList();
    }
      , error => console.log(error));
  }

  goToCandidateList() {
    this.router.navigate(['/list'])
  }

  // delete candidate
   deleteCandidate(candidateId: number){
    this.candidateService.deleteCandidate(candidateId).subscribe(data =>{
      console.log(data);
      this.getCandidates();
    })
   }

   // show details of a candidate
   viewDetails(candidateId: number){
    this.router.navigate(['candidate', candidateId]);
  }
}
