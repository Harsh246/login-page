import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  showPopup = false;

  togglePopup()
  {
    this.showPopup = !this.showPopup;
  }

  constructor() { }
}
