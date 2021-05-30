import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NoteService } from "src/app/services/note.service";

@Component({
  selector: "app-updatenote",
  templateUrl: "./updatenote.component.html",
  styleUrls: ["./updatenote.component.scss"],
})
export class UpdatenoteComponent implements OnInit {
  obj: any;
  getform: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private noteService: NoteService
  ) {
    console.log("info in update component", data.note);
    this.obj = data.note;
    {
      this.getform = this.formBuilder.group({
        title: ["", Validators.required],
        description: ["", Validators.required],
      });
    }
  }
  ngOnInit(): void {}

  submit() {
    if (this.getform.valid) {
      // let data = {
      //   title: this.getform.value.title,
      //   description: this.getform.value.description,
      // };
      let data = {
        noteId: this.obj.id,
        // title: card.card.title,
        title: this.getform.value.title,
        description: this.getform.value.description,
      };
      console.log(data);
      this.noteService.updateNote(data).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
