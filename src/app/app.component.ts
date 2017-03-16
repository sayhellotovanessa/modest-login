import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


export class User {
  email: string;
  password: string;
}

@Component({
  selector: 'login',
  moduleId: module.id,
  templateUrl: './user.component.html',
})

export class AppComponent {
  title = 'LoginApp';
  public loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
    constructor(public fb: FormBuilder) {}
    doLogin(event) {
      console.log(event);
      console.log(this.loginForm.value);
    }
}
