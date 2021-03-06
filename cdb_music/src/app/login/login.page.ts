import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      {type: 'required', message: 'El email es requerido'},
      {type: 'pattern', message: 'Ojo! este no es un email válido'}
    ],
    password: [
      {type: 'required', message: 'El password es requerido'},
      {type: 'minLength', message: 'Mínimo 5 letras para el password'}
    ]
  };
  errorMessage: string = '';

  constructor(
              private formBuilder: FormBuilder,
              private authService: AuthenticateService,
              private navCtrl: NavController
              ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl(
        '', Validators.compose([
          Validators.required,
          Validators.minLength(5)
      ]))
    });
  }

  ngOnInit() {
  }

  loginUser(credentials) {
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = '';
      this.navCtrl.navigateForward('/home');
    });
  }
}
