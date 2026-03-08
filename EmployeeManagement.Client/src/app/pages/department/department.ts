import { Component } from '@angular/core';

@Component({
  selector: 'app-department',
  imports: [],
  templateUrl: './department.html',
  styleUrl: './department.scss',
})
export class Department {

  departments = [
    { id: 1, name: 'Departman 1', status: 'Aktiflik Durumu 1' },
    { id: 2, name: 'Departman 2', status: 'Aktiflik Durumu 2' },
    { id: 3, name: 'Departman 3', status: 'Aktiflik Durumu 3' },
    { id: 4, name: 'Departman 4', status: 'Aktiflik Durumu 4' },
    { id: 5, name: 'Departman 5', status: 'Aktiflik Durumu 5' }
  ];

}
