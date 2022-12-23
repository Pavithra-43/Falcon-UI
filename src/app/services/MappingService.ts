import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { InputXml } from '../models/InputXml';

@Injectable({
  providedIn: 'root'
})
export class MappingService {
  public baseURL = "http://localhost:8080/uploadTemp123";
  constructor(private httpClient: HttpClient) { }


  triggerPipeline(fileInput: InputXml): Observable<InputXml> {
    return this.httpClient.post<InputXml>(this.baseURL, fileInput)
  }


}