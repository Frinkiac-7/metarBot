import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(private supabase: SupabaseService,
							private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean  {

			const isSignedIn: boolean = !!this.supabase.session?.user

			if (!isSignedIn) {
				this.router.navigate(['/auth'])
			}

			return isSignedIn
		}
}
