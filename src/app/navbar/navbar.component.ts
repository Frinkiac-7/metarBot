import { SupabaseService } from './../services/supabase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private supabase: SupabaseService) { }

  ngOnInit(): void {
  }

	authStatus() {
		if (this.supabase.session) {
			return true
		} else {
			return false
		}
	}

}
