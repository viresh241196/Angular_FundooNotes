import { Component, Input, OnInit } from "@angular/core";
import { NoteService } from "../services/note.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"],
})
export class DisplayComponent implements OnInit {
  @Input() notesArray: any = [];
  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    console.log(this.notesArray);
  }

  callArchive(note: any) {
    console.log(note);
    let data = {
      title: note.title,
      description: note.description,
    };
    this.noteService.addToArcheive(data).subscribe((res) => {
      console.log(res);
    });
  }
}
