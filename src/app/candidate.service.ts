import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidate } from './candidate';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {


  private listUrl = "http://localhost:8080/api/candidate/list"
  private addUrl = "http://localhost:8080/api/candidate/add"
  private updateUrl = "http://localhost:8080/api/candidate/update"


  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(`${this.listUrl}`);
  };

  addCandidate(candidate: Candidate): Observable<Object>{
    return this.httpClient.post(`${this.addUrl}`, candidate);
  };

  getCandidateById(candidateId: number): Observable<Candidate>{
    return this.httpClient.get<Candidate>(`${this.listUrl}/${candidateId}`);
  };

  updateCandidate(candidateId: number, candidate: Candidate): Observable<Object>{
    return this.httpClient.put(`${this.updateUrl}/${candidateId}`, candidate);
  };
  
}
