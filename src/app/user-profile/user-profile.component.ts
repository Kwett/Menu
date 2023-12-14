import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  public isAgeDisplayed : string = "none";
  user = {

    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'

  };

  constructor () {}

  showAge():void {
      if (this.isAgeDisplayed === "none"){
        this.isAgeDisplayed = "block";
      }
      else
    {
      this.isAgeDisplayed = "none";
    }
  }

}
