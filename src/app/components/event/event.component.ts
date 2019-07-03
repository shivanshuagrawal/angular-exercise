import { Component, OnInit, Input } from '@angular/core';
import { Events } from './Event';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: Events;
  constructor(private bookingService: BookingService, private router: Router) {
  }

  ngOnInit() {
  }

  /**
   * On Clicking any event
   * Navigate to booking page
   */
  onBook() {
    this.bookingService.eventToBook = this.event;
    this.router.navigate(['eventbooking']);
  }

}
