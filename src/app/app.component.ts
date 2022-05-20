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


  //make sure to use setters and getters otherwise it will make a local instance of it.

  // if you do something like showpop= this.firstInstance.showPopup; it will not update

  get showpopup(): boolean {
    return this.firstInstance.showPopup;
}




}
