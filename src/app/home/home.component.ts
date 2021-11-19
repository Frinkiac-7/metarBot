import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	console(event: Object) {
		console.log('Clicked:', event)
	}

  constructor() { }

  ngOnInit(): void {
  }

}
