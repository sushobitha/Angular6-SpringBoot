


import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  public title: string;
  public message: string;


  constructor(
    private dialogRef: MatDialogRef<MessagesComponent>,
  ) { }


  private closeWithTimer() {
    setTimeout (() => {
      this.dialogRef.close();
    }, 2000);
  }


  ngOnInit() {
    this.closeWithTimer();
  }

}
