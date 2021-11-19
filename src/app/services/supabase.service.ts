import { Injectable } from '@angular/core';
import {createClient, SupabaseClient} from '@supabase/supabase-js';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

	signIn(email: string, password: string) {
    return this.supabase.auth.signIn({email, password});
  }

	signUp(email: string, password: string) {
    return this.supabase.auth.signUp({email, password});
  }

	signOut() {
    return this.supabase.auth.signOut();
  }
}
