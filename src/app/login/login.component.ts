import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log("Login Success!", this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
