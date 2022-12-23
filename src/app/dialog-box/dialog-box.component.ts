import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  Data: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: string, public dialogRef: MatDialogRef<DialogBoxComponent>) {
    this.Data = data;
  }

  ngOnInit(): void {
    this.present();
  }

  present() {
    let customIn = document.getElementById("custom");
    customIn?.setAttribute('value', this.Data)
  }

  copy(inputElement: any) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    let clip = document.getElementById("clipboard") as HTMLElement;
    clip.style.color = "#12ABDB";
  }

  close() {
    this.dialogRef.close("Thanks for using me!");
  }

}
