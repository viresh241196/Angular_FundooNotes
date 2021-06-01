import { Component, OnInit } from "@angular/core";
import { NoteService } from "../../services/note.service";

@Component({
  selector: "app-getallarchieve",
  templateUrl: "./getallarchieve.component.html",
  styleUrls: ["./getallarchieve.component.scss"],
})
export class GetallarchieveComponent implements OnInit {
  AllNotes: any = [];
  isArchieve = true;
  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getAllArchieve();
  }

  getAllArchieve() {
    this.noteService.getAllArchieve().subscribe((res: any) => {
      console.log(res.data.data);
      this.AllNotes = res.data.data;
    });
  }
}
