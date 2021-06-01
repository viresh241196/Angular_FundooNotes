import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NoteService } from "../../services/note.service";
import { MatDialog } from "@angular/material/dialog";
import { UpdatenoteComponent } from "../updatenote/updatenote.component";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"],
})
export class DisplayComponent implements OnInit {
  @Input() notesArray: any;
  @Input() isArchieve : any;
  @Input() isTrash : any;
  @Output() transferToGetNotes = new EventEmitter<string>();
  constructor(private noteService: NoteService, public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.notesArray);
  }

  // callArchive(note: any) {
  //   console.log(note);
  //   let data = {
  //     noteIdList: [note.id],
  //     isArchived: true,
  //   };
  //   console.log(data);
  //   this.noteService.addToArcheive(data).subscribe((res) => {
  //     console.log(res);
  //   });
  // }

  // callTrash(note: any) {
  //   console.log(note);
  // }

  edit(note: any) {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      data: {
        note,
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log("The dialog was closed");
    });
  }

  getmessage() {
    this.transferToGetNotes.emit();
  }
}
