import { NgModule } from '@angular/core';
import { HomeContainer } from 'src/app/containers/home/home.container';
import { AboutUsContainer } from 'src/app/containers/about-us/about-us.container';
import { ContactContainer } from 'src/app/containers/contact/contact.container';
import { ServicesContainer } from 'src/app/containers/services/services.container';
import { PackageContainer } from 'src/app/containers/package/package.container';
import { BookNowContainer } from 'src/app/containers/book-now/book-now.container';
import { CommonModule } from '@angular/common';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { DestinationsComponent } from 'src/app/components/destinations/destinations.component';
import { ExploreComponent } from 'src/app/components/explore/explore.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { PackagesComponent } from 'src/app/components/packages/packages.component';
import { PlansComponent } from 'src/app/components/plans/plans.component';
import { TripComponent } from 'src/app/components/trip/trip.component';
import { ChooseusComponent } from 'src/app/components/chooseus/chooseus.component';
import { CustomersComponent } from 'src/app/components/customers/customers.component';
import { OurservicesComponent } from 'src/app/components/ourservices/ourservices.component';
import { TourismComponent } from 'src/app/components/tourism/tourism.component';
import { FullpackagesComponent } from 'src/app/components/fullpackages/fullpackages.component';
import { IntouchComponent } from 'src/app/components/intouch/intouch.component';
import { MapComponent } from 'src/app/components/map/map.component';
import { BooktourComponent } from 'src/app/components/booktour/booktour.component';

@NgModule ({
    declarations: [
        BooktourComponent,
        MapComponent,
        IntouchComponent,
        FullpackagesComponent,
        TourismComponent,
        OurservicesComponent,
        CustomersComponent,
        ChooseusComponent,
        TripComponent,
        PlansComponent,
        PackagesComponent,
        NavComponent,
        FooterComponent,
        ExploreComponent,
        DestinationsComponent,
        BannerComponent,
        HomeContainer,
        AboutUsContainer,
        ContactContainer,
        ServicesContainer,
        PackageContainer,
        BookNowContainer
    ],
imports: [
CommonModule
]
})
export class HomeModule {}
