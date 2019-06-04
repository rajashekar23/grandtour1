import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainer } from './containers/home/home.container';
import { AboutUsContainer } from './containers/about-us/about-us.container';
import { ServicesContainer } from './containers/services/services.container';
import { PackageContainer } from './containers/package/package.container';
import { ContactContainer } from './containers/contact/contact.container';
import { BookNowContainer } from './containers/book-now/book-now.container';

const routes: Routes = [
 { path: '', component: HomeContainer },
 { path: 'home', component: HomeContainer },
 { path: 'about-us', component: AboutUsContainer },
 { path: 'services', component: ServicesContainer },
 { path: 'package', component: PackageContainer },
 { path: 'contact', component: ContactContainer },
 { path: 'book-now', component: BookNowContainer }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
