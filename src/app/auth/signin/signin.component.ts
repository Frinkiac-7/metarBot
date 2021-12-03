import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SupabaseService } from './../../services/supabase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: SupabaseService, private router: Router) { }

	// authAction!: AuthAction | any
	// TODO:  Interface causes an error stating that values are missing.  Using any for now but need to resolve this.

	loginForm = new FormGroup ({
		username: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
	})

	async login() {
		try {
			const result = await this.auth.signIn(this.loginForm.value.username, this.loginForm.value.password)
			console.log('login() - result:', result)
		} catch(err) {
			console.log('login() - catch(err):', err)
		} finally {
			if (this.auth.session) {
				this.router.navigate(['/dashboard'])
			} else {
				this.router.navigate(['#'])
			}
		}
	}

	ngOnInit(): void {
  }

}
