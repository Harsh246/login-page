import { Component, OnInit } from '@angular/core';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css'],
})
export class LoginBoxComponent implements OnInit {
  isError = false;
  errorText = 'Username/Password is not Correct';
  isLoading = false;
  user = faUser;
  response: {
    loggedIn: boolean;
    message: string;
  } = {
    loggedIn: false,
    message: 'dff',
  };

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

  async trylogin(f: any) {
    this.isError = false;

    if (f.invalid) {
      this.isError = true;
      this.errorText = 'Username/Password is required.';
      return;
    }
    //    console.log(f);
    this.isLoading = true;
    console.log(f.value);

    const result = (await this.popService.verifyData(f.value)).subscribe(
      (res: any) => {
        setTimeout(() => {
          if (res.loggedIn) {
            this.popService.togglePopup();
          } else {
            this.isError = true;
            this.errorText = res.message;
          }
          this.isLoading = false;
        }, 1000);
      }
    );
  }
  constructor(private popService: LoginService) {}

  ngOnInit(): void {}
}
