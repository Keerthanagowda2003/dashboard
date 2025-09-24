import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

  }
  get f() {
    return this.contactForm.controls;
  }

  submitForm() {
    this.submitted = true;

    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert("Response is recieved")

    } else {
      console.log('Form Invalid');
      this.contactForm.markAllAsTouched();
    }
  }
}

/*
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contact={
      name:'',
  email:'',
  message:'',

  };
  submitted=false;

  submitForm(form: any){
    this.submitted=true;
    //This if contidion shows when I click submit button it shows all error
     //if (this.contact.name && this.contact.email && this.contact.message.length >= 10)
     if(form.valid){
        console.log('Form Data:', this.contact)
     }else{
      console.log('Form INvalid')
     }
    
  }

}
*/