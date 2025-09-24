import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule],
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  submitted=false;
userName: any;

  constructor(private fb:FormBuilder, private router: Router){ }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['', Validators.required],
      password:['',Validators.required]
    });
  }


  get f(){
    return this.loginForm.controls;
  }

  onSubmit(): void{
    this.submitted=true;

    if(this.loginForm.invalid){
      return;
    }
  

  const { username, password}=this.loginForm.value;

  if(username==='admin' && password==='admin'){
    alert('Login succussful');
    this.router.navigate(['/dashboard']);

  }else{
    alert('Invalid Credentials');
  }
}
}

