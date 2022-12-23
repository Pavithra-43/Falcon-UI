import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { MatDialogRef } from '@angular/material/dialog';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-mapping-box',
  templateUrl: './mapping-box.component.html',
  styleUrls: ['./mapping-box.component.css']
})
export class MappingBoxComponent implements OnInit {

  show: boolean = false;
  show1: boolean = false;
  btnDisable: boolean = true;

  close() {
    this.show = false;
  }

  close1() {
    this.show1 = false;
  }

  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };

  constructor(private fileService: FileUploadService, public dialogRef: MatDialogRef<MappingBoxComponent>) { }
  
  

  ngOnInit(): void {

  }

  // define a function to upload files
  onUploadFiles(event: Event): void {
    const file = (<HTMLInputElement>event.target).files[0]
    const formData = new FormData();
    formData.append('files', file, file.name);
    this.fileService.upload(formData).subscribe(
      event => {
        console.log(event);
        //this.reportProgress(event);
        if(event.type!=0)
        {
          this.show = true;
          this.btnDisable = false;
        }  
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.show1 = true;
      }
    );
  }

  private reportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch (httpEvent.type) {
      // case HttpEventType.UploadProgress:
      //   this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
      //   break;
      // case HttpEventType.DownloadProgress:
      //   this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
      //   break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if (httpEvent.body instanceof Array) {
          this.fileStatus.status = 'done';
          for (const filename of httpEvent.body) {
            this.filenames.unshift(filename);
          }
        } else {
          console.log(httpEvent.headers.keys())
          saveAs(new File([httpEvent.body!], "Mappings.csv",
            { type: "text/csv" }));
          // saveAs(new Blob([httpEvent.body!], 
          //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
          //    httpEvent.headers.get('File-Name'));
        }
        this.fileStatus.status = 'done';
        break;
      default:
        console.log(httpEvent);
        break;

    }
  }

  // private updateStatus(loaded: number, total: number, requestType: string): void {
  //   this.fileStatus.status = 'progress';
  //   this.fileStatus.requestType = requestType;
  //   this.fileStatus.percent = Math.round(100 * loaded / total);
  // }

  downloadMapping() {
    let filename = "Mappin12.csv"
    this.fileService.download(filename).subscribe(event => {
      console.log(event);
      this.reportProgress(event)
    })
  }

  buttonClose(){
    this.dialogRef.close("Thanks for using me!");
    let blurMode=document.getElementById("body")as HTMLElement;
    blurMode.style.filter='blur(0px)';
  }


}
