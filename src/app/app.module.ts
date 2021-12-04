import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './services/auth.guard';
import { SupabaseService } from './services/supabase.service';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AuthComponent,
    NotfoundComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
		ToastContainerModule
  ],
  providers: [SupabaseService, AuthGuard],
  // providers: [SupabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
