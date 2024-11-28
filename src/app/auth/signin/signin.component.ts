import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SupabaseService } from './../../services/supabase.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	@ViewChild(ToastContainerDirective, { static: true })
	toastContainer: ToastContainerDirective | undefined

  constructor(private auth: SupabaseService, private router: Router, private toastrService: ToastrService) { }

	// authAction!: AuthAction | any
	// TODO:  Interface causes an error stating that values are missing.  Using any for now but need to resolve this.

	loginForm = new UntypedFormGroup ({
		username: new UntypedFormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
		password: new UntypedFormControl('', [Validators.required, Validators.minLength(8)]),
	})

	async login() {
		if(this.loginForm.controls['username'].status === 'INVALID') {
			this.loginForm.reset({ username: '', password: ''})
			this.toastrService.error('Must use a valid email address', 'Error', { progressBar: true})
			return
		}

		try {
			const result = await this.auth.signIn(this.loginForm.value.username, this.loginForm.value.password)
			this.loginForm.reset({ username: '', password: ''})
		} catch(err) {
			console.log('login() - catch(err):', err)
		} finally {
			if (this.auth.session) {
				this.toastrService.success('Login successful','Status', {
					progressBar: true,
				})
				.onHidden.subscribe(() => {
					this.router.navigate(['/dashboard'])
				})
			} else {
				this.toastrService.error('Login Error. Please Try again','Status', {
					progressBar: true,
				})
			}
		}
	}

	ngOnInit(): void {
		this.toastrService.overlayContainer = this.toastContainer
  }

}
