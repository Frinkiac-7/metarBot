import { Injectable } from '@angular/core';
import { AuthChangeEvent, createClient, Session, SupabaseClient } from '@supabase/supabase-js';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})

export class SupabaseService {

  constructor() {
    this.client = createClient(environment.supabaseUrl, environment.supabaseKey)
	}

	private client: SupabaseClient;
	result: any

	get user() {
    return this.client.auth.user();
  }

  get session() {
    return this.client.auth.session();
  }

	authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.client.auth.onAuthStateChange(callback);
  }

	signIn(email: string, password: string) {
		return this.client.auth.signIn({email, password})
  }

	signUp(email: string, password: string) {
		return this.client.auth.signUp({email, password})
	}

	signOut() {
    return this.client.auth.signOut();
  }

}
