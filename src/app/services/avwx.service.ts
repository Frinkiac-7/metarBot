import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Metar } from './../interfaces/metardata';

@Injectable({
  providedIn: 'root'
})
export class AvwxService {

	constructor(private http: HttpClient) {}

	getReport(report: string, station: string): Observable<Metar[]> {
		return this.http.get<Metar[]>(`.netlify/functions/avwxGetWxData/?report=${report}&station=${station}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

}
