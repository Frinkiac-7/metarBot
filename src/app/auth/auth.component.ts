import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

	ngOnInit(): void {
  }

	loading: boolean = true
	newUser: boolean = false

	toggleSignUp() {
		this.newUser = true
	}

	toggleLogin() {
		this.newUser = false
	}

}
