import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  showPopup = false;

  togglePopup()
  {
    console.log("inside toggle popup");
    this.showPopup = !this.showPopup;
  }


 

  constructor() { }
}
