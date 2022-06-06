import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input()GetNote: any;
  
  constructor(public dialog: MatDialog,private snav:MatSnackBar) { }
  
  ngOnInit(): void {
  }
  openDialog(notation: any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '550px',
      height:"200px",
      
      data: notation,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.snav.open('delete note Successfully', '', {
        duration: 3000,
      })
      
    });
  }

}
