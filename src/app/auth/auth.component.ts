import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private supabase: SupabaseService) { }
	public status: any
	public loading: boolean = true

  ngOnInit(): void {
		// this.userSignUp('penny@bigbang.com', 'Th151sMyPa55w0rd')
		// this.userSignIn('leonard@bigbang.com', 'Th151sMyPa55w0rd')
		// this.userSignOut()
  }

	async userSignUp(email: string, password: string) {
		try {
			this.status = await this.supabase.signUp(email, password)
			console.log('status:', this.status)
			this.loading = false
		} catch(error) {
			console.log('AuthComponent caught error:', error)
		}
	}

	async userSignIn(email: string, password: string) {
		try {
			this.status = await this.supabase.signIn(email, password)
			console.log('status:', this.status)
			this.loading = false
		} catch(error) {
			console.log('AuthComponent caught error:', error)
		}
	}

	async userSignOut() {
		try {
			this.status = await this.supabase.signOut()
			console.log('status:', this.status)
			this.loading = false
			if(this.status.error === null) {
				this.status.signout = 'success'
			}
		} catch(error) {
			console.log('AuthComponent caught error:', error)
		}
	}

}
