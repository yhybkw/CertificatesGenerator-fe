import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-view-candidate',
  templateUrl: './view-candidate.component.html',
  styleUrl: './view-candidate.component.css'
})
export class ViewCandidateComponent implements OnInit {

  candidateId: any
  candidate: Candidate

  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidateService
  ){}

  ngOnInit(): void {
    this.candidateId = this.route.snapshot.params['candidateId']
    this.candidateService.getCandidateById(this.candidateId).subscribe(data =>{
      this.candidate = data
      console.log(data)
    });
  }

}
