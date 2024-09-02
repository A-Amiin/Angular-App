import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  Title: string = "Note Book Application";
  imageLink: string = "https://bulletjournal.com/cdn/shop/articles/breakinginanotebook_1600x.jpg?v=1535293695";

  notes: string[] = [];
  newNote: string = "";
  isAvalible: boolean = false;
  addNote() {
    if (this.newNote.trim() !== "") {
      this.notes.push(this.newNote);
      this.newNote = "";
      this.isAvalible = true;
    }

  }
  RemoveNote(index: number) {
    this.notes.splice(index, 1);
    this.isAvalible = this.notes.length > 0;
  }
  // EditTask(index :number)
  // {
  //   let updateTask = prompt("Edit Task",this.tasks[index]);
  //   if(updateTask !==null)
  //   {
  //     this.tasks[index] = updateTask.trim();
  //   }
  // }
  EditNote(index: number, newtaskEdit: string): string | void {
    const trimedTask = newtaskEdit.trim();
    if (newtaskEdit.trim() !== "") {
      this.notes[index] = trimedTask;
    }
    else {
      newtaskEdit = this.notes[index];
      return this.newNote = newtaskEdit;
    }
    this.newNote = "";
  }
}