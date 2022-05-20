import { Component, OnInit } from '@angular/core';
import { faUser, faEye ,faEyeSlash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css'],
})
export class LoginBoxComponent implements OnInit {
  isError = false;
  errorText = 'Username/Password is not Correct';
  isLoading = false;
  user= faUser;


  closeEye = true;

  eyeurl = faEyeSlash;
  textType = 'password';

  toggleEye() {
    if (this.closeEye) {
      this.eyeurl = faEye;

      this.textType = 'text';
    } else this.eyeurl = faEyeSlash;
    this.closeEye = !this.closeEye;
    this.textType = 'password';
  }

  constructor() {}

  ngOnInit(): void {}
}
