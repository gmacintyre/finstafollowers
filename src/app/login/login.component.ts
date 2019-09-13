import { Component, OnInit } from '@angular/core';


export interface Place {
  city: string;
  state: string; 
  country: string;
  zipcode: string;
  visited: boolean;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
}) 
export class LoginComponent implements OnInit {


	public clientId: string='';
	public redirectUri: string = '';
	constructor() { 
		this.clientId = '84353389e21b4d98882d597da4f13fca';
		this.redirectUri = 'http://localhost:4200/dashboard';
		
	}

	ngOnInit() {

	}

}
