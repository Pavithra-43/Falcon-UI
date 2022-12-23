import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { GitModel } from '../models/GitModel';


@Injectable({
  providedIn: 'root'
})
export class GatlingService {
  public baseURL = "https://gitlab.com/api/v4/projects/30653523/trigger/pipeline";
  constructor(private httpClient: HttpClient) { }

  //To trigger the pipeline
  triggerPipelineGat(git: GitModel): Observable<GitModel> {
    return this.httpClient.post<GitModel>(this.baseURL, git)
  }

  //Get the job status
  triggerJobGat(url: string) {
    return this.httpClient.get(url, { headers: new HttpHeaders().set('PRIVATE-TOKEN', '[PRIVATE-TOKEN]') })
  }

  //To trigger the job
  triggerJob1Gat(url: string) {
    return this.httpClient.post(url, "", { headers: new HttpHeaders().set('PRIVATE-TOKEN', '[PRIVATE-TOKEN]') })
  }

  //Get the job status
  getJobStatusGat(url: string) {
    return this.httpClient.get(url, { headers: new HttpHeaders().set('PRIVATE-TOKEN', '[PRIVATE-TOKEN]') })
  }


  //Get the job status
  getJobStatus2Gat(url: string) {
    return this.httpClient.get(url, { headers: new HttpHeaders().set('PRIVATE-TOKEN', '[PRIVATE-TOKEN]') })

  }





}