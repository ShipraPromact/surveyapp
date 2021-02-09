import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {
  myForm: FormGroup;

  questions = [
    { type: "name", options: "" ,description: "What is your name ?", isHidden: false },
    { type: "email", options: "" , description: "What is your email ?", isHidden: true },
    { type: "message", options: "", description: "What is your message ?", isHidden: true },
    {type: "radio",
      options: [
        { value: "male" },
        {  value: "female" },
       ],
      description: "Gender", isHidden: true
    },
    {
      type: "checkbox",
      options: [
        {value: "java" },
        {value: "javascript" },
        {value: "HTML" },
        {value: "Angular" },
      ],
      description: "Courses", isHidden: true
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('Benedict'),
      email: new FormControl(''),
      message: new FormControl(''),
      radio: new FormControl(''),
      checkbox: new FormControl(''),
    });
  }
  onSubmit() {
    console.log(this.myForm.value);
  }
}
