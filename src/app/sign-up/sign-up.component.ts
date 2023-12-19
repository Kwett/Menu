import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  
  User: SignUpForm = new SignUpForm("", "", "", "");
  showErrors : boolean = false;

  constructor() { }


  errorCheck( User : SignUpForm): void {
 
  }

  onSubmit(): void {
    console.log(this.User);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

export class SignUpForm {

  constructor(

      public firstName: string,
      public lastName: string,
      public email: string,
      public password : string

  ) {}

}
