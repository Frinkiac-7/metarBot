import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'auth',
		component: AuthComponent
	},
	{
		path: 'dashboard',
		canActivate: [AuthGuard],
		component: DashboardComponent
	},
	{
		path: '404',
		component: NotfoundComponent
	},
	{
		path: '**', 
		redirectTo: '/404'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
