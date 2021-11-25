import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SupabaseService } from '../services/supabase.service';

// import { AuthGuard } from './../services/auth.guard';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private supabase: SupabaseService) { }

	ngOnInit(): void {
  }

	userForm = new FormGroup({
		username: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)])
	})

	authAction: Object = {}
	loading: boolean = true
	newUser: boolean = false
	formStatus: any = this.userForm.controls 

	toggleNewUser() {
		this.newUser = !this.newUser
	}

	authBtnText() {
		return this.newUser === false ? 'Login' : 'Sign Up'
	}

	authBtnStyle() {
		return this.userForm.status === 'INVALID' ? 'disabled' : 'enabled'
	}

	authBtnStatus() {
		this.userForm.status === 'INVALID' ? 'false' : 'true'
	}

	onSubmit() {
		if (this.newUser) {
			this.userSignUp()
		}
		if (!this.newUser) {
			this.userSignIn()
		}
		console.log('this.userForm:', this.userForm)
		// TODO: Add a form.reset or something here
	}

	async userSignIn() {
		try {
			this.authAction = await this.supabase.signIn(this.userForm.value.username, this.userForm.value.password)
			console.log('userSignIn - authAction:', this.authAction)
			this.loading = false
		} catch(error) {
			console.log('AuthComponent caught error:', error)
		}
	}

	async userSignOut() {
		try {
			this.authAction = await this.supabase.signOut()
			console.log('this.authAction:', this.authAction)
			this.loading = false
		} catch(error) {
				console.log('AuthComponent caught error:', error)
		}
	}

	async userSignUp() {
		try {
			this.authAction = await this.supabase.signUp(this.userForm.value.username, this.userForm.value.password)
			console.log('authAction:', this.authAction)
			this.loading = false
		} catch(error) {
			console.log('AuthComponent caught error:', error)
		}
	}

}
