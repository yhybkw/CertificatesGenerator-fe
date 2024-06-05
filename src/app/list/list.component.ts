import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  title = 'Certificates Generator';
  // @ViewChild('pdfFrame') pdfFrame: ElementRef;
  signatureUrl = 'assets/signature.png';
  logoUrl = 'assets/logo.png';
  nttUrl = 'assets/ntt.png';
  uaeUrl = 'assets/uae.png';
  msiUrl = 'assets/msi.png'
  candidate: Candidate = new Candidate();
  candidates: Candidate[] = [];
  // updateCandidate
  // candidateId: number;
  candidateToUpdate = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    diploma: "",
    university: "",
    gender: "",
    phoneNumber: "",
    type: "",
    date: "",
    candidateID: 0,
  }

  constructor(private candidateService: CandidateService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCandidates();
    this.candidateService.getList().subscribe(candidates => {
      this.candidates = candidates;
    })
  }

  updateCandidate(candidateId: number) {
    this.router.navigate(['update', candidateId]);
  }

  // delete candidate
  deleteCandidate(candidateId: number) {
    this.candidateService.deleteCandidate(candidateId).subscribe(data => {
      console.log(data);
      this.getCandidates();
    })
  }

  // show details of a candidate
  viewDetails(candidateId: number) {
    this.router.navigate(['candidate', candidateId]);
  }

  // update modal
  popup6() {
    const modalDiv = document.getElementById('Modal3')
    if (modalDiv != null) {
      modalDiv.style.display = 'block'
    }
  }
  closePopup6() {
    const modalDiv = document.getElementById('Modal3')
    if (modalDiv != null) {
      modalDiv.style.display = 'none'
    }
  }
  edit(candidate) {
    this.candidateToUpdate = candidate
  }
  modifyCandidate() {
    this.candidateService.modifyCandidate(this.candidateToUpdate).subscribe(
      (resp) => {
        console.log(resp)
      },
      (err) => { console.log(err) }
    );
  }

  // Print All popun
  popupPA() {
    const modalDiv = document.getElementById('ModalPA')
    if (modalDiv != null) {
      modalDiv.style.display = 'block'
    }
  }
  closePopupPA() {
    const modalDiv = document.getElementById('ModalPA')
    if (modalDiv != null) {
      modalDiv.style.display = 'none'
    }
  }

  printAllCertificates(): void {
    alert('Working on it');
  }
  // add candidate popup
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
  onSubmit() {
    console.log(this.candidate);
    this.addCandidate();
    this.goToCandidateList();
  }
  addCandidate() {
    this.candidateService.addCandidate(this.candidate).subscribe(data => {
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
  goToCandidateList() {
    this.router.navigate(['/list'])
  }
  // Certificate Preview
  previewCertificate(candidate: Candidate): void {
    console.log('Generating certificate for:', candidate);
    const data = document.getElementById(`certificate-${candidate.candidateId}`);
    if (data) {
      console.log('Element found:', data);
      data.style.display = 'block'; // for preview
      this.loadFontsAndImages().then(() => {
        html2canvas(data).then(canvas => {
          console.log('Canvas created');
          const imgData = canvas.toDataURL('image/png');
          // Create a PDF document
          const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [canvas.width, canvas.height]
          });

          pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

          // data.style.display = 'none'; // Hide it again
          console.log('PDF preview');
        }).catch(error => {
          console.error('Error generating certificate:', error);
          data.style.display = 'none'; // Hide it again in case of error
        });
      }).catch(error => {
        console.error('Error loading resources:', error);
        data.style.display = 'none';
      });
    } else {
      console.error('Certificate element not found for student:', candidate);
    }
  }

  // Certificate Generator
  generateCertificate(candidate: Candidate): void {
    console.log('Generating certificate for:', candidate);
    const data = document.getElementById(`certificate-${candidate.candidateId}`);
    if (data) {
      console.log('Element found:', data);
      data.style.display = 'block'; // for preview
      this.loadFontsAndImages().then(() => {
        html2canvas(data).then(canvas => {
          console.log('Canvas created');
          const imgData = canvas.toDataURL('image/png');
          // Create a PDF document
          const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [canvas.width, canvas.height]
          });

          pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

          const blob = pdf.output('blob');
          const url = URL.createObjectURL(blob);
          window.open(url);

          data.style.display = 'none'; // Hide it again
          console.log('PDF opened/saved');
        }).catch(error => {
          console.error('Error generating certificate:', error);
          data.style.display = 'none'; // Hide it again in case of error
        });
      }).catch(error => {
        console.error('Error loading resources:', error);
        data.style.display = 'none';
      });
    } else {
      console.error('Certificate element not found for student:', candidate);
    }
  }


  openPDF(pdfData: string): void {
    // Open the PDF data in a new tab or window
    const win = window.open();
    if (win) {
      win.document.write(`<iframe width='100%' height='100%' src='${pdfData}'></iframe>`);
    } else {
      console.error('Unable to open PDF.');
    }
  }

  loadFontsAndImages(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        document.fonts.ready.then(() => {
          console.log('Fonts loaded');
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  downloadCertificate(candidate: Candidate): void {
    console.log('Generating certificate for:', candidate);
    const data = document.getElementById(`certificate-${candidate.candidateId}`);
    if (data) {
      console.log('Element found:', data);
      data.style.display = 'block'; // for preview
      this.loadFontsAndImages().then(() => {
        html2canvas(data).then(canvas => {
          console.log('Canvas created');
          const imgData = canvas.toDataURL('image/png');
          // Create a PDF document
          const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [canvas.width, canvas.height]
          });

          pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

          // download
          pdf.save(`${candidate.firstName}-certificate.pdf`);


          data.style.display = 'none'; // Hide it again
          console.log('PDF opened/saved');
        }).catch(error => {
          console.error('Error generating certificate:', error);
          data.style.display = 'none'; // Hide it again in case of error
        });
      }).catch(error => {
        console.error('Error loading resources:', error);
        data.style.display = 'none';
      });
    } else {
      console.error('Certificate element not found for student:', candidate);
    }
  }

}
