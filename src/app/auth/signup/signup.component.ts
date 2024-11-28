import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SupabaseService } from 'src/app/services/supabase.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	@ViewChild(ToastContainerDirective, { static: true })
	toastContainer: ToastContainerDirective | undefined

  constructor(private auth: SupabaseService, private router: Router, private toastrService: ToastrService) { }

	signupForm = new UntypedFormGroup({
		username: new UntypedFormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
		password: new UntypedFormControl('', [Validators.required, Validators.minLength(8)]),
		passwordConfirmation: new UntypedFormControl('', [Validators.required, Validators.minLength(8)])
	})
	
	async signUp() {
		const pw = this.signupForm.value.password
		const cpw = this.signupForm.value.passwordConfirmation
		if(pw === cpw) {
			try {
				const result = await this.auth.signUp(this.signupForm.value.username, this.signupForm.value.password)
			} catch(err) {
				console.log('signUp() - catch(err) caught:', err)
			} finally {
				if (this.auth.session) {
					this.toastrService.success('Signed up successfully!', 'Success', {
						progressBar: true
					}).onHidden.subscribe(() => {
						this.router.navigate(['/dashboard'])
					})
				} else {
					this.toastrService.error('Signup Error. Please Try again','Status', {
						progressBar: true,
					})
				}
			}
		} else {
			this.toastrService.error('Passwords do not match', 'Error')
			return
		}
		this.signupForm.reset({ username: '', password: '', passwordConfirmation: '' })
	}

  ngOnInit(): void {
		this.toastrService.overlayContainer = this.toastContainer
  }

}
