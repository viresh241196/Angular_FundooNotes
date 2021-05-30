import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NoteService } from "../services/note.service";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
})
export class IconComponent implements OnInit {
  @Input() card: any;
  @Output() refreshCauseDeleted = new EventEmitter<string>();
  @Output() refreshCauseArchieve = new EventEmitter<string>();
  constructor(private noteService: NoteService) {}

  ngOnInit(): void {}

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
}
