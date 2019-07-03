import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

/* Services */
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { DataService } from './services/data.service';

/* Components */
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { AllBookingComponent } from './components/all-booking/all-booking.component';
import { EventBookComponent } from './components/event-book/event-book.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ErrorComponent } from './components/error/error.component';
import { EventComponent } from './components/event/event.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventBookComponent,
    EventListComponent,
    NavBarComponent,
    ErrorComponent,
    BookingDetailsComponent,
    AllBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
