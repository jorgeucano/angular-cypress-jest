import {Validators} from '@angular/forms';
export class BaseForm<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  showAlert: boolean;
  placeholder: string;
  alertMessage: string;
  controlType: string;
  validators: Array<Validators>;
  regexValidations: Array<RegExp>;
  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    showAlert?: boolean,
    placeholder?: string,
    alertMessage?: string,
    controlType?: string,
    validators?: Array<Validators>,
    regexValidations?: Array<RegExp>
  } = {}) {
    // @ts-ignore
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.showAlert = options.showAlert || false;
    this.placeholder = options.placeholder || '';
    this.alertMessage = options.alertMessage || '';
    this.controlType = options.controlType || '';
    this.validators = options.validators || [];
    this.regexValidations = options.regexValidations || [];
  }
}
