import { Component } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { FoodtrucksService } from 'src/app/services/foodtrucks.service';
import { sample_products } from 'src/data';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  
  constructor(private foodTruckService: FoodtrucksService,public dataService:DataserviceService){}

  foodTrucks = this.foodTruckService.getALL();

  ToFoodTruck(foodTruckTitle: string){
    this.dataService.sharedData = foodTruckTitle;
  }

  
}
