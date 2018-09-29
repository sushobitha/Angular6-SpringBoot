import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { MessagesComponent } from './messages.component';

@Injectable()
export class MessagesService {

  dialogRef: MatDialogRef<MessagesComponent>;

  constructor(private dialog: MatDialog) { }

  public openDialog(title: string, message: string): Observable<any> {
    this.dialogRef = this.dialog.open(MessagesComponent);
    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.message = message;

    return this.dialogRef.afterClosed();

    // Nothing can live after afterClosed.
  }

}
