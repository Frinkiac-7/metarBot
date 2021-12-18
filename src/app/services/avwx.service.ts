import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Metar } from './../interfaces/metardata';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AvwxService {

	constructor(private http: HttpClient, private auth: SupabaseService) {}
	
	getReport(report: string, station: string): Observable<Metar[]> {
		const userInfo = this.auth.session
		console.log('(avwxService) userInfo:', userInfo)
		return this.http.get<Metar[]>(`http://localhost:8888/.netlify/functions/avwxGetWxData/?report=${report}&station=${station}&session=${userInfo?.access_token}`, {
			headers: {
				'Content-Type': 'application/json'
			},
		})
	}
	
}
