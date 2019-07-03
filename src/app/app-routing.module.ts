import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { EventListComponent } from './components/event-list/event-list.component';
import { EventBookComponent } from './components/event-book/event-book.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { AllBookingComponent } from './components/all-booking/all-booking.component';

/**
 * Route path
 */
const routes: Routes = [
  {
    path: "eventslist",
    component: EventListComponent
  },
  {
    path: "eventbooking",
    component: EventBookComponent
  },
  {
    path: "bookingdetails/:id",
    component: BookingDetailsComponent
  },
  {
    path: "bookinglist",
    component: AllBookingComponent
  },
  {
    path: "",
    redirectTo: "/eventslist",
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
