import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Model } from '../models/Model'

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

   private server = 'http://localhost:7777';
  

  private wiremock_server = 'http://localhost:8888';
  

  constructor(private http: HttpClient) {}

  // define function to upload files
  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.server}/uploadTemp123`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  // define function to download files
  download(filename: string): Observable<HttpEvent<Blob>> {
    return this.http.get(`${this.server}/download/${filename}/`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }

  // define function to upload JSON files for wiremock-swagger
  uploadjson(formData: FormData): Observable<Model[]> {
    return this.http.post<Model[]>(`${this.wiremock_server}/uploadJSON`, formData);
    //     return new Model(item.key, item.methodType, item.parameters, item.body, item.responses)
    //   })
    // }))
  }
  
}
