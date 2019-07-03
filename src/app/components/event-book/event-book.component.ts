import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ERRORMSGS } from '../error/error-list';
import { Events } from '../event/Event';

@Component({
  selector: 'app-event-book',
  templateUrl: './event-book.component.html',
  styleUrls: ['./event-book.component.css']
})
export class EventBookComponent implements OnInit {
  constructor(private bookingService: BookingService,
    private router: Router) { }
  bookingForm: FormGroup;
  arr = [];
  seats;
  ERRORMSGS = ERRORMSGS;
  event: Events;
  ngOnInit() {
    this.event = this.bookingService.eventToBook;
    if (!this.bookingService.eventToBook) {
      this.onCancel();
    }
    else
      this.formCreation();
  }

  /**
   * On cancel booking Navigate to home page
   */
  onCancel() {
    this.router.navigate(['eventslist']);
  }

  /**
 * Form Creation
 */
  formCreation() {
    this.bookingForm = new FormGroup({
      id: new FormControl(2),
      eventId: new FormControl(this.event.getEventId()),
      eventName: new FormControl(this.event.getEventName()),
      eventDate: new FormControl(this.event.getEventDate()),
      eventDescp: new FormControl(this.event.getEventDescp()),
      eventImage: new FormControl(this.event.getEventImage()),
      userName: new FormControl("", [Validators.required, Validators.pattern("[A-Za-z][A-Za-z ]+")]),
      email: new FormControl("", [Validators.required, Validators.pattern("[A-Za-z0-9.]+@[A-Za-z.]+")]),
      phoneNumber: new FormControl("", [Validators.required, Validators.pattern("[1-9][0-9]{9}")]),
      noOfSeats: new FormControl(null, [Validators.required, Validators.max(this.event.getAvailableSeats() - 6)])
    })
  }

  /**
 * Seats Selection
 */
  onSeatSelection() {
    if (this.bookingForm.get('attendees'))
      this.bookingForm.removeControl("attendees");
    this.seats = parseInt(this.bookingForm.get('noOfSeats').value);
    if (this.bookingForm.get('noOfSeats').value && this.seats > 1) {
      this.arr = new Array<number>(this.seats - 1).fill(1);
      let attendees = new FormGroup({});
      this.arr.map((v, i) => {
        let controlName = 'attendee' + (i + 2);
        attendees.addControl(controlName, new FormControl('', [Validators.required, Validators.pattern("[A-Za-z][A-Za-z ]+")]));
      })
      this.bookingForm.addControl("attendees", attendees);
    }
  }

  /**
 * On submit with validation
 */
  onSubmit() {
    if (this.bookingForm.valid) {
      this.bookingService.bookEvent(this.bookingForm.value);
    }
    else
      this.markFormAsTouched(this.bookingForm);
  }

  /**
 * Show errors on invalid form
 */
  markFormAsTouched(formJson: FormGroup) {
    Object.keys(formJson.controls).forEach(field => {
      if (field == "attendees")
        this.markFormAsTouched(<FormGroup>formJson.get(field));
      const control = formJson.get(field);
      control.markAsTouched();
    });
  }
}
