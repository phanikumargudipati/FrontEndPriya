import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'emps',
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css']
})
export class EmpsComponent implements OnInit {
  emps: any[] = [];
  empForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.emps = [
      { empcode: 'emp101', name: "Phani", dateOfBirth: '1990-08-18', gender: "male", sal: 123456.66 },
      { empcode: 'emp102', name: "Harika", dateOfBirth: '1992-11-21', gender: "female", sal: 923456.13 },
      { empcode: 'emp103', name: "Deepak", dateOfBirth: '1993-05-18', gender: "male", sal: 223456.66 },
      { empcode: 'emp104', name: "Harry", dateOfBirth: '1994-07-20', gender: "male", sal: 323456.77 },
      { empcode: 'emp105', name: "Jahnavi", dateOfBirth: '1995-06-19', gender: "female", sal: 423456.65 }
    ];

    this.empForm = this.fb.group({
      empcode: ['', Validators.required],
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      sal: ['', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]]
    });
  }

  addEmployee(): void {
    if (this.empForm.valid) {
      this.emps.push(this.empForm.value);
      this.empForm.reset();
    } else {
      this.empForm.markAllAsTouched();
    }
  }
}
