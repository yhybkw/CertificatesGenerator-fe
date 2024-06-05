import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Candidate } from './candidate';
import { CandidateService } from './candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Certificates Generator';
  bgimage = '../assets/Background.png';
  logoUrl = '../assets/logo.png'

  candidate: Candidate = new Candidate();
  candidates: Candidate[];

  constructor(private candidateService: CandidateService,
    private router: Router
  ) { }

  ngOnInit(): void {}

}