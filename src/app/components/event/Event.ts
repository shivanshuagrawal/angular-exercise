export class Events {
    private eventId;
    private eventName;
    private eventPrice;
    private eventCity;
    private eventDate;
    private eventDescp;
    private availableSeats;
    private eventImage;
    private id;

    /*Getters and Setters*/
    public getId() {
        return this.id;
    }
    public setId(id) {
        this.id = id;
    }

    public getEventId() {
        return this.eventId;
    }
    public setEventId(eventId) {
        this.eventId = eventId;
    }

    public getEventName(): String {
        return this.eventName;
    }
    public setEventName(eventName) {
        this.eventName = eventName;
    }

    public getEventPrice() {
        return this.eventPrice;
    }
    public setEventPrice(eventPrice) {
        this.eventPrice = eventPrice;
    }

    public getEventCity(): String {
        return this.eventCity;
    }
    public setEventCity(eventCity) {
        this.eventCity = eventCity;
    }

    public getEventDate() {
        return this.eventDate;
    }
    public setEventDate(eventDate) {
        this.eventDate = eventDate;
    }

    public getEventDescp() {
        return this.eventDescp;
    }
    public setEventDescp(eventDescp) {
        this.eventDescp = eventDescp;
    }

    public getAvailableSeats() {
        return this.availableSeats;
    }
    public setAvailableSeats(availableSeats) {
        this.availableSeats = availableSeats;
    }

    public getEventImage(): String {
        return this.eventImage;
    }
    public setEventImage(eventImage) {
        this.eventImage = eventImage;
    }

}