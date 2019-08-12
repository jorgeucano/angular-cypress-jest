import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { BaseForm } from './base-form';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'generic-form',
  templateUrl: './generic-form.html'
})

// tslint:disable-next-line:component-class-suffix
export class GenericForm implements OnInit {

  @Input() questions: BaseForm<any>[] = [];
  @Input() name: string = 'save';
  // tslint:disable-next-line:no-output-native
  @Output() submit: EventEmitter<BaseForm<any>[]> = new EventEmitter<BaseForm<any>[]>();
  form: FormGroup;

  ngOnInit() {
    this.form = this.toFormGroup(this.questions);
  }

  toFormGroup(form: BaseForm<any>[]): FormGroup {
    const group: any = {};
    form.forEach(f => {
      const validators: any = [];
      if (f.validators) {
        f.validators.forEach(x => validators.push(x));
      }
      if (f.required) {
        validators.push(Validators.required);
      }
      // tslint:disable-next-line:variable-name
      const _regex: Array<any> = [];
      if (f.regexValidations) {
        f.regexValidations.forEach(r => _regex.push(this.regexValidations(r)));
      }

      group[f.key] = new FormControl(f.value || '', [...validators, ..._regex]);
    });
    return new FormGroup(group);
  }

  regexValidations(validation: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => { // tslint:disable-line:no-any
      const forbidden = validation.test(control.value);
      return forbidden ? {validationRegex: {value: control.value}} : null;
    };
  }

  onSubmit() {
    console.log(this.form.value);
    this.submit.emit(this.form.value);
  }


}
