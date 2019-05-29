import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string = 'jordan.pena1@gmail.com';
  private senha: string = 'senha@teste';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  clickLogin() {
    this.auth.emailLogin(this.email, this.senha).then(() => {
  
        this.router.navigate(['dashboard']);

    }).catch(e => {
      console.log(e)
    });
  }

}
