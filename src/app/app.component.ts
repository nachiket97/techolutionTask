import { Component } from '@angular/core';


import {ReactiveFormConfig } from '@rxweb/reactive-form-validators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'techolution';

  constructor() { 
    ReactiveFormConfig.set({ 
      "validationMessage": {
          "required": "This field is required.",
          "maxLength":"maximum length is 20 digit",
          "minLenght":"Enter minimum length of {{0}} characters.",
          "compare":"The value should be matched with {{0}}.",
          "alpha":"you can only enter alphabets.",
          "digit":"accepts only number",
          "alphaNumeric":"Accept only numeric and string value",
          "greaterThan":"enter year before 2017",
    }
  });
  }

  ngOnInit(): void {
    
}
}
