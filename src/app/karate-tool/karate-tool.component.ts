import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KaratePipelineComponent } from '../karate-pipeline/karate-pipeline.component';


@Component({
  selector: 'app-karate-tool',
  templateUrl: './karate-tool.component.html',
  styleUrls: ['./karate-tool.component.css']
})
export class KarateToolComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  endpoints = [
    {id: 1, endpoint: 'http://taxquote-tms'},
    {id: 2, endpoint: 'https://customerdocument-rsp'},
    {id: 3, endpoint: 'https://customerqualification-rsp'},
    {id: 4, endpoint: 'https://easypay-rsp'},
    {id: 5, endpoint: 'https://eipdocument-rsp'},
    {id: 6, endpoint: 'https://equipmentinstallmentprogram-rsp'},
    {id: 7, endpoint: 'https://paymenthistory-rsp'},
    {id: 8, endpoint: 'https://capability-creditriskprofile-rsp'},
    {id: 9, endpoint: 'https://capability-receipt-rsp'},
    {id: 10, endpoint: 'https://recordsmanagement-rsp'},
    {id: 11, endpoint: 'https://canceleipjob-rsp'},
    {id: 12, endpoint: 'https://customerdocumentuploadjob-rsp'},
    {id: 13, endpoint: 'https://customerdocumentuploadjobconsumer-rsp'},
    {id: 14, endpoint: 'https://eipdisclosuredocumentuploadjob-rsp'},
    {id: 15, endpoint: 'https://emailreminderjob-rsp'},
    {id: 16, endpoint: 'https://envelopedisposejob-rsp'},
    {id: 17, endpoint: 'https://updatehotidetailjob-rsp'},
    {id: 18, endpoint: 'http://taxquotesb-rsp'},

    
    
  ];
  selected = [
    {}
  ];

  endpoints1 = [
    {id: 1, endpoint1: 'ilab02'},
    {id: 2, endpoint1: 'qlab02'},
    {id: 3, endpoint1: 'qlab03'},
    {id: 4, endpoint1: 'plab01'},
    {id: 5, endpoint1: 'prd03c'},
    {id: 6, endpoint1: 'prd04c'},
    
  ];
  selected1 = [
    {}
  ];


  createKarateApp() {
    let blurVariable = document.getElementById("body") as HTMLElement;
    blurVariable.style.filter = 'blur(5px)';
    console.log("Generate comparison result button cliked!")
    let dialogRef = this.dialog.open(KaratePipelineComponent, { height: "700px", width: "600px", disableClose: true });
  }

  




}
