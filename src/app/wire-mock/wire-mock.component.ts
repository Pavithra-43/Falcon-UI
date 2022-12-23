import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WiremockSwaggerComponent } from '../wiremock-swagger/wiremock-swagger.component';

@Component({
  selector: 'app-wire-mock',
  templateUrl: './wire-mock.component.html',
  styleUrls: ['./wire-mock.component.css']
})
export class WireMockComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  show: boolean = false;
  show1: boolean = false;
 
  close() {
    this.show = false;
  }
 
  close1() {
    this.show1 = false;
  }
 
  ngOnInit(): void {
  }

  createStubUsingSwagger() {
    let blurVariable = document.getElementById("body") as HTMLElement;
    blurVariable.style.filter = 'blur(5px)';
    let dialogRef = this.dialog.open(WiremockSwaggerComponent, { height: "1000px", width: "1000px", disableClose: true });
  }
}
