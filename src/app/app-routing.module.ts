import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

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
