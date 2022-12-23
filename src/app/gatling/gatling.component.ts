import { Component, OnInit } from '@angular/core';
import { GatlingService } from '../services/GatlingService';
import { OthersComponent } from '../others/others.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gatling',
  templateUrl: './gatling.component.html',
  styleUrls: ['./gatling.component.css']
})
export class GatlingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  createGatlingApp() {
    let blurVariable = document.getElementById("body") as HTMLElement;
    console.log("Gatling Dialogbox Opened!")
    blurVariable.style.filter = 'blur(5px)';
    let dialogRef = this.dialog.open(OthersComponent, { height: "700px", width: "600px", disableClose: true });
  }

 

}
