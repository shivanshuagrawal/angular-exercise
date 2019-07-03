import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    /**
     * Events List
     */
    const events = [
      {
        "id": 1,
        "eventId": "1",
        "eventName": "CHARITY FASHION",
        "eventPrice": "200",
        "eventCity": "Pune",
        "eventDate": "07/06/2019",
        "eventDescp": "Runway Heroes is a creative stage event featuring Fashion displays by top fashion designers and brands. With over one hundred kids walking the runway to both live and recorded music, the event is made more dynamic by the blend of Kids performing live music and dance routines to thrill the guests. Runway Heroes -Indian Kids Charity Fashion Show with the vision of giving Kids the opportunity to live their dreams and help raise funds for needy children. Come and enjoy an array of Group Singers, Choirs, Musical Performers and Dancers. The Indian Kids Charity Fashion show is a well thought through creative runway event created to feature some of the best in kids clothing, giving opportunities to both new and established designers and a platform for the children’s clothing market. The aim of the event is to help to raise funds for Charity’s work in rural Maharashtra.",
        "availableSeats": "100",
        "eventImage": "charity.jpeg"
      },
      {
        "id": 2,
        "eventId": "2",
        "eventName": "Laughter yoga",
        "eventPrice": "200",
        "eventCity": "Pune",
        "eventDate": "07/06/2019",
        "eventDescp": "Laughter  yoga  is  for  health , happiness  and  world  peace. We  are  conducting  on  6th July, Saturday  at  National college  grounds,  Basavanagudi , Bengaluru. Around 10,000 participants   and  20000  audiences  are  expected  on  the  day  of  the event. Free  entry  for  all  and  all  participants  will be  given  participation  certificates. All  category  school  students,  college students ,   youths ,  family  people,  old  people    (  6 years  to  80 years  of  age )  can  participate.",
        "availableSeats": "200",
        "eventImage": "yoga.jpg"
      },
      {
        "id": 3,
        "eventId": "3",
        "eventName": "The Canvas Paint",
        "eventPrice": "200",
        "eventCity": "Pune",
        "eventDate": "8/11/2019",
        "eventDescp": "Want to try out something new this weekend? Want to find a unique way to bond with your family, friends, colleagues or your significant other? Want to gift a loved one? Well, colors speak louder than words. Get your hands messy at The Crimson Canvas - Paint Party this weekend and paint your hearts out. We promise that you will not regret it!",
        "availableSeats": "60",
        "eventImage": "paint.jpg"
      },
      {
        "id": 4,
        "eventId": "4",
        "eventName": "Imagica Park",
        "eventPrice": "200",
        "eventCity": "Pune",
        "eventDate": "10/11/2019",
        "eventDescp": "Imagica offers a world-class attractions with the Theme Park, Water Park, Snow Park, House of Stars, Glowmagica, and Eyelusion",
        "availableSeats": "0",
        "eventImage": "imagica.jpg"
      },
      {
        "id": 5,
        "eventId": "5",
        "eventName": "Remixed Live DJ",
        "eventPrice": "200",
        "eventCity": "Pune",
        "eventDate": "9/11/2019",
        "eventDescp": "Remixed Live is taking the stage with Cheryl Dsouza on vocals and TSA the DJ spinning his magic! Cheryl Dsouza is the Best Entertainment Act award winner 2018 in Hyderabad. She is going to sing to some remixes of popular songs like 'Shape of you/Love me like you do/Lean on/Rolling in the deep' and many more of our favourites",
        "availableSeats": "200",
        "eventImage": "dj.jpg"
      },
      {
        "id": 6,
        "eventId": "6",
        "eventName": "Goa Tour",
        "eventPrice": "200",
        "eventCity": "Pune",
        "eventDate": "11/11/2019",
        "eventDescp": "We (Scout Tales) crafted a Special Tour to Goa in July for you all. This Monsoon, gear up & pack your bags for the Ultimate Goa Expedition with Scout Tales. All Groups , Colleagues , Bloggers & Couples are welcome to join with us.",
        "availableSeats": "200",
        "eventImage": "goa.png"
      },
      {
        "id": 7,
        "eventId": "7",
        "eventName": "Casino",
        "eventPrice": "500",
        "eventCity": "Pune",
        "eventDate": "10/11/2019",
        "eventDescp": "Come try your luck  and win a buck! Join us for Casino Night for Charity on May tenth at six-thirty in the evening ",
        "availableSeats": "0",
        "eventImage": "casino.jpg"
      }
      ,
      {
        "id": 8,
        "eventId": "8",
        "eventName": "Dinner",
        "eventPrice": "200",
        "eventCity": "Pune",
        "eventDate": "12/11/2019",
        "eventDescp": "There is nothing quite like city lights & wondrous nights! Please join us Downtown for dinner at the Pier ",
        "availableSeats": "100",
        "eventImage": "dinner.jpg"
      },
      {
        "id": 9,
        "eventId": "9",
        "eventName": "Dream Workshop",
        "eventPrice": "200",
        "eventCity": "Pune",
        "eventDate": "7/13/2019",
        "eventDescp": "Come and learn and create a magical dream catcher! This meditative art is soul satisfying and adds beauty to your surroundings. Dream catcher has a native american origin where it was believed if hung by the window or bed, it filters out your negative dreams and drops the positive ones only as you sleep :)",
        "availableSeats": "100",
        "eventImage": "dream.jpg"
      },
      {
        "id": 10,
        "eventId": "10",
        "eventName": "Dancing with stars",
        "eventPrice": "200",
        "eventCity": "Pune",
        "eventDate": "7/17/2019",
        "eventDescp": "There is nothing quite like city lights & wondrous nights! Please join us Downtown for dance",
        "availableSeats": "100",
        "eventImage": "dance.jpg"
      }
    ];
    const booking = [];
    return { events, booking }
  }

  constructor() { }
}
