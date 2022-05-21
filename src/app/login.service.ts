import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  showPopup = false;
  response={};

  togglePopup()
  {
    console.log("inside toggle popup");
    this.showPopup = !this.showPopup;
  }

 async verifyData(formData: any)
  {

   
 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
    });
    console.log(formData);

    let body =JSON.stringify(formData);

    let url = "http://localhost:3000/";

   

  return await this.http.post(url, body,{'headers':headers})
 
  }
  constructor(private http: HttpClient ) { }
}
