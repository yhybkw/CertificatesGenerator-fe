import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  candidates: Candidate[];

  constructor(private candidateService: CandidateService){

  }

  ngOnInit(): void {
    this.getList();
    
  }

  getList(){
    this.candidateService.getList().subscribe(data => {
      this.candidates = data;
    });
  }

}
