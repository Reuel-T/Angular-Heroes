import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


/*
  First, the app-routing.module.ts file imports RouterModule and Routes so the application 
  can have routing functionality. The next import, HeroesComponent, will give the Router 
  somewhere to go once you configure the routes.

  The next part of the file is where you configure your routes. 
  Routes tell the Router which view to display when a user clicks a link or pastes a URL 
  into the browser address bar.
*/

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  //To make the application navigate to the dashboard automatically, add the following route to the routes array.
  //This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //The colon (:) in the path indicates that :id is a placeholder for a specific hero id. This link can take a parameter
  { path: 'detail/:id', component: HeroDetailComponent },

];

/* 
  The @NgModule metadata initializes the router and starts it listening for browser location changes.
  
  The following line adds the RouterModule to the AppRoutingModule imports array and configures 
  it with the routes in one step by calling RouterModule.forRoot():

  The method is called forRoot() because you configure the router at the application's root level. 
  The forRoot() method supplies the service providers and directives needed for routing, 
  and performs the initial navigation based on the current browser URL.
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }