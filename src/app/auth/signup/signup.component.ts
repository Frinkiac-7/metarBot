import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: SupabaseService, private router: Router) { }

	signupForm = new FormGroup({
		username: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
		passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(8)])
	})

	async signUp() {
		try {
			const result = await this.auth.signUp(this.signupForm.value.username, this.signupForm.value.password)
			console.log('signUp() - result:', result)
		} catch(err) {
			console.log('signUp() - catch(err) caught:', err)
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
