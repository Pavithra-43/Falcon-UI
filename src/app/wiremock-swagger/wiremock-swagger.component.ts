import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import { saveAs } from 'file-saver'
import { MatDialogRef } from '@angular/material/dialog';
import { Model } from '../models/Model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wiremock-swagger',
  templateUrl: './wiremock-swagger.component.html',
  styleUrls: ['./wiremock-swagger.component.css']
})
export class WiremockSwaggerComponent implements OnInit {

  show: boolean = false;
  show1: boolean = false;
  show2: boolean = false;
  hAdd: boolean = false
  pAdd: boolean = false
  bAdd: boolean = false
  btnDisable: boolean = true;
  model: any;
  models: Array<Model> = [];
  headermethods = ["contains", "matches", "doesNotMatch"]
  paramethods = ["contains", "matches", "doesNotMatch"]
  httpmethods = ["GET", "PUT", "POST", "DELETE"]

  reqBodyType: string
  rawType: string
  rawTypes = ["text", "JSON"]
  body: any = []
  savebody: boolean = true
  reqBody = ""
  headerEnable: boolean;
  paramEnable: boolean;

  close() {
    this.show = false;
  }

  close1() {
    this.show1 = false;
  }

  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };

  constructor(private fileService: FileUploadService, public dialogRef: MatDialogRef<WiremockSwaggerComponent>) { }
  
  

  ngOnInit(): void {

  }

  // define a function to upload files
  onUploadFiles(event: Event): void {
    const file = (<HTMLInputElement>event.target).files[0]
    const formData = new FormData();
    formData.append('files', file, file.name);
    this.fileService.uploadjson(formData).subscribe(
      event => {
        this.model = event;
        if(event.length!=0)
        {
          this.show = true;
          this.show2 = true;
          this.btnDisable = false;
        }
        for(let data of this.model)
        {
          this.models.push(new Model(data.key, data.methodType, data.headers, data.parameters, data.body, data.responses))
        }       
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.show1 = true;
      }
    );
    console.log(this.models)
  }

  buttonClose(){
    this.dialogRef.close("Thanks for using me!");
    let blurMode=document.getElementById("body")as HTMLElement;
    blurMode.style.filter='blur(0px)';
  }

  addHeader() {
    this.hAdd = true
    this.headerEnable = true
  }
  saveHeader(){

  }
  deleteHeader(headerz: any){
    console.log(headerz)

  }

  addQueryParam() {
    this.pAdd = true
    this.paramEnable = true
  }
  saveParam(){

  }
  deleteParam(paramz: any){
    console.log(paramz)
  }

  addBody() {
    this.bAdd = true
  }
  saveBody(){

  }
  deleteBody(){
    this.bAdd = false
  }

  validateBody(JSONbody: string) {

    try {
      //check if the string exists
      if (JSONbody) {
        var body = JSON.parse(JSONbody);

        //validate the result too
        if (body && body.constructor === Object) {
          return false;
        }
        else {
          true;
        }
      }
    }
    catch (error: any) {
      return true;
    }

    return false;

  }

  checkType(type: string) {
    if (type == "raw")
      return true;
    else
      return false;
  }

}
