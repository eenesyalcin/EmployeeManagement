import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'department-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './department-add.html',
  styleUrl: './department-add.scss',
})
export class DepartmentAdd {

  isOpen = model(false);

  close() {
    this.isOpen.set(false);
  }

  save() {
    // Kaydetme kodları yer alacak
  }

}
