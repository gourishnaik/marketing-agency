import { Component } from '@angular/core';

export interface Trip {
  start: string; 
  end: string;   
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  trips: Trip[] = [];

  startInput = '';
  endInput = '';

  addTrip() {
    const start = this.startInput.trim().slice(0, 3).toUpperCase();
    const end = this.endInput.trim().slice(0, 3).toUpperCase();
    if (!start || !end) return;
    this.trips.push({ start, end });
    this.startInput = '';
    this.endInput = '';
  }

  getLevel(i: number): number {
    if (i === 0) return 1;
    const prev = this.trips[i - 1];
    const curr = this.trips[i];
    if (prev.start === curr.start && prev.end === curr.end) return 2;
    return 1;
  }

  isContinued(i: number): boolean {
    if (i === 0) return true;
    return this.trips[i - 1].end === this.trips[i].start;
  }
}