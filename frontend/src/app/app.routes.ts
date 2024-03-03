import { Routes } from "@angular/router";
import { BookingComponent } from "./booking/booking.component";
import { GiftshopComponent } from "./giftshop/giftshop.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { ShowdetailsComponent } from "./showdetails/showdetails.component";
import { ShowsComponent } from "./shows/shows.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { LocationComponent } from "./location/location.component";


export const routes: Routes = [
    {
        path: '',
        component: LandingpageComponent,
        title: 'Planetarium Südstern'
    },
    {
        path: 'booking',
        component: BookingComponent,
        title: 'Platz-Reservierung'
    },
    {
        path: 'giftshop',
        component: GiftshopComponent,
        title: 'Giftshop'
    },
    {
        path: 'location',
        component: LocationComponent,
        title: 'Anfahrt'
    },
    {
        path: 'shows',
        component: ShowsComponent,
        title: 'Shows'
    },
    {
        path: 'shows/:id',
        component: ShowdetailsComponent,
        title: 'Showdetails'
    },
    {
        path: 'aboutus',
        component: AboutusComponent,
        title: 'Über Uns'
    }
];