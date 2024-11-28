import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SupabaseService } from '../../services/supabase.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: false
})
export class NavbarComponent implements OnInit {

  constructor(private supabase: SupabaseService, private router: Router) { }

  ngOnInit(): void {
  }

	showProfile = false
  showMenu = false
	authAction: any

	toggleProfile() {
		this.showProfile = !this.showProfile
		this.showMenu = false
	}

  toggleNavbar(){
    this.showMenu = !this.showMenu;
		this.showProfile = false
  }

	authStatus() {
		if (this.supabase.session) {
			return true
		} else {
			return false
		}
	}

	async userSignOut() {
		this.showProfile = false;
		try {
			this.authAction = await this.supabase.signOut()
		} catch(error) {
				console.log('Navbar caught error:', error)
		} finally {
			this.router.navigate(['/'])
		}
	}

}
