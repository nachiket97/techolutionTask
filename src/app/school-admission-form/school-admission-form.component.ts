import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Schooladmissionform } from './schooladmissionform.model';

@Component({
  selector: 'app-school-admission-form',
  templateUrl: './school-admission-form.component.html',
  styleUrls: ['./school-admission-form.component.css']
})
export class SchoolAdmissionFormComponent implements OnInit {

  userRegistrationFormGroup: FormGroup

  constructor(private formBuilder: RxFormBuilder) { }

  ngOnInit(): void {
    let user = new Schooladmissionform();
    this.userRegistrationFormGroup = this.formBuilder.formGroup(user);
  }

}
