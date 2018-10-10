import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})


export class AddMemberComponent implements OnInit {
  memberForm: FormGroup;

  public date: Date = new Date(Date.now());

  private dayFormatter = new Intl.DateTimeFormat('en', { weekday: 'short'});
  private monthFormatter = new Intl.DateTimeFormat('en', { month: 'short'});

  public formatter = (_: Date) => {
    return `${this.dayFormatter.format(_)}, ${_.getDate()} ${this.monthFormatter.format(_)}, ${_.getFullYear()}`;
  }

  constructor() {
    this.memberForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      birthday: new FormControl(''),
      phone: new FormControl('', Validators.minLength(10)),
      email: new FormControl('', Validators.email),
      startDate: new FormControl('', Validators.required),


    });
  }

  ngOnInit() {
  }
  onSubmit(form){
    console.log(form);
  }


}
