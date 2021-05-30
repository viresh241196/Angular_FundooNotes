import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: "root",
})
export class NoteService {
  constructor(private httpservice: HttpService) {}

  createNote(data: any) {
    return this.httpservice.Post("/notes/addNotes", data);
  }

  getAllNotes() {
    return this.httpservice.Get("/notes/getNotesList/");
  }

  getAllArchieve() {
    return this.httpservice.Get("/notes/getArchiveNotesList/");
  }

  addToArcheive(data: any) {
    return this.httpservice.Post("/notes/archiveNotes/", data);
  }

  addToTrash(data: any) {
    return this.httpservice.Post("/notes/trashNotes/", data);
  }

  updateNote(data: any) {
    return this.httpservice.Post("/notes/updateNotes", data);
  }
}
