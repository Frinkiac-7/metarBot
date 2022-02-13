import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaaService {

  constructor(private http: HttpClient) { }

	getNotams(type: string) {
		type = type.toUpperCase()
		return this.http.get(`/.netlify/functions/faaGetNotams/?classification=${type}&pageSize=1000`)
	}

}
