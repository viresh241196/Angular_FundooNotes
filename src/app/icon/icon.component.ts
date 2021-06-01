import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NoteService } from "../services/note.service";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
})
export class IconComponent implements OnInit {
  @Input() card: any;
  @Input() isArchieve: any;
  @Input() isTrash: any;
  @Output() refreshCauseDeleted = new EventEmitter<string>();
  @Output() refreshCauseArchieve = new EventEmitter<string>();
  @Output() refreshCauseColor = new EventEmitter<string>();
  constructor(private noteService: NoteService, public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.isArchieve + "hi");
  }

  public colorList: any[] = [
    [{ color: "#fff" }, { color: "#f28b82" }, { color: "#fbbc04" }],
    [{ color: "#fff475" }, { color: "#ccff90" }, { color: "#a7ffeb" }],
    [{ color: "#cbf0f8" }, { color: "#aecbfa" }, { color: "#d7aefb" }],
  ];
  callArchive(card: any) {
    console.log(card);
    let data = {
      noteIdList: [card.id],
      isArchived: true,
    };
    console.log(data);
    this.noteService.addToArcheive(data).subscribe((res) => {
      console.log(res);
      this.refreshCauseArchieve.emit();
      location.reload();
    });
  }
  callUnArchive(card: any) {
    console.log(card);
    let data = {
      noteIdList: [card.id],
      isArchived: false,
    };
    console.log(data);
    this.noteService.addToArcheive(data).subscribe((res) => {
      console.log(res);
      this.refreshCauseArchieve.emit();
      location.reload();
    });
  }

  callTrash(card: any) {
    console.log(card);
    let data = {
      noteIdList: [card.id],
      isDeleted: true,
    };
    this.noteService.addToTrash(data).subscribe((res) => {
      console.log(res);
      this.refreshCauseDeleted.emit();
    });
  }

  callUnTrash(card: any) {
    console.log(card);
    let data = {
      noteIdList: [card.id],
      isDeleted: false,
    };
    this.noteService.addToTrash(data).subscribe((res) => {
      console.log(res);
      this.refreshCauseDeleted.emit();
    });
  }

  changecolor(color: any, card: any) {
    console.log(color, card);
    let data = {
      color: color,
      noteIdList: [this.card.id],
    };
    this.noteService.changeColor(data).subscribe((res) => {
      console.log(res);
      this.refreshCauseColor.emit();
    });
    console.log(card);
  }

  callDeleteForever(card: any) {
    console.log(card);
    this.noteService.callDelete(card).subscribe((res) => {
      console.log(res);
      this.refreshCauseColor.emit();
    });
  }
}
