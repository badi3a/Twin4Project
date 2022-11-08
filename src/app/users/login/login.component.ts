import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form= new FormGroup(
      {
        email: new FormControl('',[Validators.required, Validators.email]),
        psw:new FormControl('',[Validators.required, Validators.minLength(5)])
      }
    )
  }
  login(){
    console.log('email: '+this.form.value.email);
    console.log('password: '+this.form.value.psw);
    //ts
  }
}
