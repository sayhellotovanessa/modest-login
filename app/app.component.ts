import { Component } from '@angular/core';

export class User {
  name: string;
  password: string;
}

@Component({
  selector: 'login',
  template: `
  <div class="all">
    <section class="section__content">
     <h1>{{title}}</h1>
     <h2>Welcome back, {{user.name}}</h2>
    </section>
    <section class="section__form">
      <div>
        <label>email: </label>
        <input class="login__input" placeholder="yourname@email.net">
      </div>
      <div>
        <label>password: </label>
        <input class="login__input" type="password" value="{{user.password}}">
      </div>
      <button [disabled]="loading" class="login__btn">Login</button>
    </section>
  </div>

  `
})

export class AppComponent {
  title = 'LoginApp';
  user: User = {
  name: 'John Snow',
  password: ''
};
}
