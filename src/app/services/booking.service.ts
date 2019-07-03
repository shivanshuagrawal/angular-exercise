import { Injectable } from '@angular/core';
import { Events } from '../components/event/Event';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  static bookingId = 0;
  eventToBook: Events;
  eventBookingUrl = "api/booking";
  updateSeatUrl = "api/events"
  constructor(private dataService: DataService, private router: Router) {
  }
  /**
   * On booking event
   */
  bookEvent(bookingDetails) {
    BookingService.bookingId++;
    bookingDetails.id = BookingService.bookingId;
    this.dataService.post(this.eventBookingUrl, bookingDetails).subscribe((result) => {
      this.eventToBook.setAvailableSeats(parseInt(this.eventToBook.getAvailableSeats()) - parseInt(bookingDetails.noOfSeats));
      this.dataService.post(this.updateSeatUrl, this.eventToBook).subscribe((result) => {
        this.router.navigate(["bookingdetails/" + bookingDetails.id]);
      })
    },
      error => BookingService.bookingId--
    )
  }
}
