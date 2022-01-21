import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './services/auth.guard';
import { SupabaseService } from './services/supabase.service';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { AvwxService } from './services/avwx.service';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { StationComponent } from './station/station.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AuthComponent,
    NotfoundComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    StationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
		ToastContainerModule,
		HttpClientModule
  ],
  providers: [SupabaseService, AuthGuard, AvwxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
