import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-page',
  templateUrl: './flight-page.component.html',
  styleUrls: ['./flight-page.component.css']
})
export class FlightPageComponent implements OnInit {
  total = 1;
  constructor() { }

  ngOnInit() {
  }
  decremantTotal() {
      if (this.total !== 1) {
        this.total = this.total - 1;
      }
  }
  incrementTotal() {
    if (this.total !== 8) {
      this.total = this.total + 1;
    }
}

}
