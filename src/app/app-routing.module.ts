import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { HiremeComponent } from './hireme/hireme.component';
import { MetartafComponent } from './metartaf/metartaf.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StationComponent } from './station/station.component';

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
		path: 'station',
		component: StationComponent
	},
	{
		path: 'metartaf',
		component: MetartafComponent
	},
	{
		path: 'hireme',
		component: HiremeComponent
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
