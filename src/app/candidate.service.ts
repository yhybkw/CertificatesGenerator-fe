import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidate } from './candidate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {


  private listUrl = "http://localhost:8080/api/candidate/list"


  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(`${this.listUrl}`);
  }
  
}
