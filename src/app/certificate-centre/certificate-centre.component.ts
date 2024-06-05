import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-certificate-centre',
  templateUrl: './certificate-centre.component.html',
  styleUrl: './certificate-centre.component.css'
})
export class CertificateCentreComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router){

  }

  ngOnInit(): void {
    
  }
  goToList() {
    this.router.navigate(['/list']);
  }
}
