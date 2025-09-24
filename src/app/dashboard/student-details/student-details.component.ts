import { Component } from '@angular/core';


interface Student {
  id: number;
  name: string;
  email: string;
  age: number;

}

@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent {
  students=[
     { id: 1, name: 'Keerthana', email: 'keerthana@example.com', age: 22 },
    { id: 2, name: 'Rahul',  email: 'rahul@example.com',age: 28 },
    { id: 3, name: 'Sneha',  email: 'sneha@example.com', age: 30}
  ];

}
