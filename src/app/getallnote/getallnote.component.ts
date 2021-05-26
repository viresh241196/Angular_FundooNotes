import { Component, OnInit } from "@angular/core";
import { NoteService } from "../services/note.service";


@Component({
  selector: "app-getallnote",
  templateUrl: "./getallnote.component.html",
  styleUrls: ["./getallnote.component.scss"],
})
export class GetallnoteComponent implements OnInit {
  AllNotes: any = [];
  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    this.noteService.getAllNotes().subscribe((resp: any) => {
      console.log(resp.data.data);
      this.AllNotes = resp.data.data;
    });
  }

  getmessage() {
    console.log("refresh notes");
    this.getAllNotes();
  }
}
