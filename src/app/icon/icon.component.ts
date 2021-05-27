import { Component, Input, OnInit } from "@angular/core";
import { NoteService } from "../services/note.service";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
})
export class IconComponent implements OnInit {
  @Input() card: any;
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
    });
  }
}
