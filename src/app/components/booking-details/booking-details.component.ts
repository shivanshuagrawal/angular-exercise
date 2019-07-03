import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  bookingDetailsURL = "api/booking/";
  bookingDetails;
  bookingId
  constructor(private bookingService: BookingService,
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res =>
      this.bookingId = res["id"]
    )
    this.getBookingDetails(this.bookingId);
  }
  /**
 * Get Booking Details based on booking id
 */
  getBookingDetails(id) {
    this.dataService.get(this.bookingDetailsURL, id).subscribe((result) => {
      this.bookingDetails = result;
    },
      error => {
        this.router.navigate(["eventslist"])
      }
    )
  }

}
