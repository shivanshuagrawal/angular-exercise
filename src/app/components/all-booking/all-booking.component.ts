import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.css']
})
export class AllBookingComponent implements OnInit {
  bookingDetailsURL = "api/booking/";
  constructor(private dataService: DataService, private router: Router) { }
  allBooking;
  ngOnInit() {
    this.getBookingDetails();
  }
  /**
 * Fetch all bookings
 */
  getBookingDetails() {
    this.dataService.getAll(this.bookingDetailsURL).subscribe((result) => {
      this.allBooking = result;
    })
  }
  /**
   * Navigate to particular booking
   */
  OnDetails(id) {
    this.router.navigate(["bookingdetails/" + id]);
  }
}
