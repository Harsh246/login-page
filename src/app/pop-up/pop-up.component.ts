import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(private popservice: LoginService) { }


  close()
  {
    
     this.popservice.togglePopup();
  }

  ngOnInit(): void {
  }

}
