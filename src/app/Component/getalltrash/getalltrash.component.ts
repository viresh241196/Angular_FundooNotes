import { Component, OnInit } from "@angular/core";
import { NoteService } from "../../services/note.service";

@Component({
  selector: "app-getalltrash",
  templateUrl: "./getalltrash.component.html",
  styleUrls: ["./getalltrash.component.scss"],
})
export class GetalltrashComponent implements OnInit {
  AllNotes: any = [];
  isTrash = true;
  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getAllTrash();
  }

  getAllTrash() {
    this.noteService.getAllTrash().subscribe((res: any) => {
      console.log(res);
      this.AllNotes = res.data.data;
    });
  }
}
