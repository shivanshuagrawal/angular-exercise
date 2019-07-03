import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Events } from '../event/Event';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnChanges {
  displayEvents: Events[] = [];
  constructor(private dataService: DataService) { }
  eventListUrl = "api/events";
  search;
  totalEvents;

  ngOnInit() {
    this.getAllEvents();
  }

  /**
   * Show result based on search
   */
  ngOnChanges(changes: SimpleChanges) {
    if (this.search) {
      this.displayEvents = this.totalEvents.filter(event =>
        event.getEventName().toLowerCase().includes(this.search.toLowerCase())
      )
    }
    else {
      this.displayEvents = this.totalEvents;
    }
  }
  
  /**
   * Fetch all events and set in bean
   */
  getAllEvents() {
    this.dataService.getAll(this.eventListUrl).subscribe((result) => {
      this.totalEvents = <Events[]>result;
      if (this.totalEvents.length > 0) {
        this.totalEvents.map(event => {
          let ev = new Events();
          ev.setId(event.id);
          ev.setEventId(event.eventId);
          ev.setEventName(event.eventName);
          ev.setEventPrice(event.eventPrice);
          ev.setEventDate(new Date(event.eventDate));
          ev.setEventCity(event.eventCity);
          ev.setEventImage(event.eventImage);
          ev.setEventDescp(event.eventDescp);
          ev.setAvailableSeats(event.availableSeats);
          this.displayEvents.push(ev);
        }
        )
      }
      this.totalEvents = this.displayEvents;
    });
  }
}