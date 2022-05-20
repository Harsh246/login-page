import { Component } from '@angular/core';
import {LoginService} from '../app/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-page';

  constructor(private firstInstance: LoginService )
  {

  }

  showpopup = this.firstInstance.showPopup;

}
