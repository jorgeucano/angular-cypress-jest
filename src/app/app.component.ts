import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Color} from './interfaces/color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cypress';
  load = false;

  questions: any;

  constructor() {
    this.questions = [
      {
        key: 'name',
        label: 'First Name',
        order: 1,
        controlType: 'input',
        required: true,
        showAlert: false,
        placeholder: 'Fill out your First Name',
        alertMessage: 'Must be a valid First Name',
        value: 'Jorge'
      },
      {
        key: 'lastName',
        label: 'last Name',
        order: 1,
        controlType: 'input',
        required: true,
        showAlert: false,
        placeholder: 'Fill out your First Name',
        alertMessage: 'Must be a valid First Name',
        value: ''
      }
    ];
  }

}
