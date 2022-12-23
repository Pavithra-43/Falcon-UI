import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InitializrFormComponent } from '../initializr-form/initializr-form.component';

@Component({
  selector: 'app-initializr',
  templateUrl: './initializr.component.html',
  styleUrls: ['./initializr.component.css']
})
export class InitializrComponent implements OnInit {

  constructor(public dialog: MatDialog,private readonly sso: ScrollStrategyOptions) {  
  }

  ngOnInit(): void {
  }
  createApp(){
      let blurVariable=document.getElementById("body")as HTMLElement;
      console.log("Initializer Dialogbox Opened!")
      blurVariable.style.filter='blur(5px)';
      let dialogRef = this.dialog.open(InitializrFormComponent,{height:"680px",width:"800px",disableClose:true , position: {top:'10px'
    },closeOnNavigation:true});
    
  }

}
