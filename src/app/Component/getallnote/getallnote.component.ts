import { Component, OnInit } from "@angular/core";
import { NoteService } from "../../services/note.service";

@Component({
  selector: "app-getallnote",
  templateUrl: "./getallnote.component.html",
  styleUrls: ["./getallnote.component.scss"],
})
export class GetallnoteComponent implements OnInit {
  AllNotes: any = [];
  filterNotes: any = [];
  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    this.noteService.getAllNotes().subscribe((resp: any) => {
      console.log(resp.data.data);
      let list = resp.data.data;
      this.AllNotes = [];
      let temp = [];
      for (let Item of list) {
        if (!Item.isDeleted && !Item.isArchived) temp.push(Item);
      }
      this.AllNotes = temp.reverse();
      // this.filterNotes = resp.data.data;
      // this.filterNotes.filter((data: any) => {
      //   if (!data.isDeleted && !data.isArchived) {
      //     this.AllNotes.push(data);
      //   }
      // });
      console.log(this.AllNotes);
    });
  }

  getmessage() {
    console.log("refresh notes");
    this.getAllNotes();
  }

  refreshList() {
    console.log("refreshed via icon");
    this.getAllNotes();
  }
}
