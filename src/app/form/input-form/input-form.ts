import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BaseForm} from '../base-form';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-input',
  templateUrl: './input-form.html'
})

// tslint:disable-next-line:component-class-suffix
export class InputForm {
  @Input() question: BaseForm<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  setValue(event, key) {
    this.form.controls[key].setValue(event.srcElement.value);
  }
}
