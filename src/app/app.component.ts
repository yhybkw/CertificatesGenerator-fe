import { Component, OnInit } from '@angular/core';
import { Candidate } from './candidate';
import { CandidateService } from './candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Certificates Generator';

  candidate: Candidate = new Candidate();
  candidates: Candidate[];

  constructor(private candidateService: CandidateService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  popup() {
    const modalDiv = document.getElementById('myModal')
    if (modalDiv != null) {
      modalDiv.style.display = 'block'
    }
  }
  closePopup() {
    const modalDiv = document.getElementById('myModal')
    if (modalDiv != null) {
      modalDiv.style.display = 'none'
    }
  }

  onSubmit(){
    console.log(this.candidate);
    this.addCandidate();
    this.goToCandidateList();
  }

  addCandidate(){
    this.candidateService.addCandidate(this.candidate).subscribe(data =>{
      console.log(data);
      this.getCandidates();
    },
    error => console.log(error));
  }

  private getCandidates() {
    this.candidateService.getList().subscribe(data => {
      this.candidates = data;
    });
  }

  goToCandidateList(){
    this.router.navigate(['/list'])
      }


}
