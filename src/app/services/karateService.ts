import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Header } from 'src/app/models/wiremockModal';
import { GitModel } from '../models/GitModel';

@Injectable({
  providedIn: 'root'
})
export class karateService {
  public baseURL = "https://gitlab.com/api/v4/projects/29249469/trigger/pipeline";
  constructor(private httpClient: HttpClient) { }

  //To trigger the pipeline
  triggerPipeline(git: GitModel): Observable<GitModel> {
    return this.httpClient.post<GitModel>(this.baseURL, git)
  }

  //Get Job Status
  triggerJob(url: string) {
    return this.httpClient.get(url, { headers: new HttpHeaders().set('PRIVATE-TOKEN', '[PRIVATE-TOKEN]') })
  }

  //To trigger the job
  triggerJob1(url: string) {
    return this.httpClient.post(url, "", { headers: new HttpHeaders().set('PRIVATE-TOKEN', '[PRIVATE-TOKEN]') })
  }

  //Get Job Status
  getJobStatus(url: string) {
    return this.httpClient.get(url, { headers: new HttpHeaders().set('PRIVATE-TOKEN', '[PRIVATE-TOKEN]') })
  }


  //Get Job Status
  getJobStatus2(url: string) {
    return this.httpClient.get(url, { headers: new HttpHeaders().set('PRIVATE-TOKEN', '[PRIVATE-TOKEN]') })
  }





}