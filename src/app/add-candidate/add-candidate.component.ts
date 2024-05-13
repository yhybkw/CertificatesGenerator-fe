import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrl: './add-candidate.component.css'
})
export class AddCandidateComponent implements OnInit {


  candidate : Candidate = new Candidate();
  constructor(){

  }

  ngOnInit(): void {
    
  }

}
