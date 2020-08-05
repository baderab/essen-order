import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './componants/add-restaurant/add-restaurant.component';
import { RestaurantsListComponent } from './componants/restaurants-list/restaurants-list.component';

const routes: Routes = [
  { path: 'addRestaurantComponent', component: AddRestaurantComponent },
  { path: 'restaurantslistComponent', component: RestaurantsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
