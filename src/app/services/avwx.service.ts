import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

import { Metar } from './../interfaces/metardata';
import { Station } from '../interfaces/stationdata';

@Injectable({
  providedIn: 'root'
})
export class AvwxService {

	constructor(private http: HttpClient) {}

	metar: any

	getReport(report: string, station: string) {
		return this.http.get<Metar>(`/.netlify/functions/avwxGetWxData/?report=${report}&station=${station}`, {
			headers: {
				'Content-Type': 'application/json'
			},
		})
		.pipe(catchError(error => {
			return ([error])
		}))
	}

	stationSearch(id: string): Observable<Station> {
		return this.http.get<Station>(`/.netlify/functions/avwxGetStationData/?station=${id}`, {
			headers: {
				'Content-Type': 'application/json'
			},
		})
		.pipe(catchError(error => {
			return ([error])
		}))
	}
	
}
