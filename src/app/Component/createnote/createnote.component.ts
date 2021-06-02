import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NoteService } from "../../services/note.service";

@Component({
  selector: "app-createnote",
  templateUrl: "./createnote.component.html",
  styleUrls: ["./createnote.component.scss"],
})
export class CreatenoteComponent implements OnInit {
  clicked = false;
  getform: FormGroup;

  @Output() EventToGetAllNotes = new EventEmitter<string>();
  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService
  ) {
    this.getform = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.getform.value);
    let data = {
      title: this.getform.value.title,
      description: this.getform.value.description,
    };
    this.noteService.createNote(data).subscribe((res) => {
      console.log(res);
      this.EventToGetAllNotes.emit();
    });
    this.clicked = false;
  }
}
