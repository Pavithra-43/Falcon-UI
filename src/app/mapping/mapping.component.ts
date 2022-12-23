import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { MappingBoxComponent } from '../mapping-box/mapping-box.component';
import { MatDialog } from '@angular/material/dialog';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {

  constructor(public dialog: MatDialog,private readonly sso: ScrollStrategyOptions) { 
   
  }
  ngOnInit(): void {
  }
  getMappingOutput() {
    let blurVariable = document.getElementById("body") as HTMLElement;
    blurVariable.style.filter = 'blur(5px)';
    console.log("Get Spec File button clicked!")
    let dialogRef = this.dialog.open(MappingBoxComponent, { height: "500px", width: "600px", disableClose: true});
  }



}

