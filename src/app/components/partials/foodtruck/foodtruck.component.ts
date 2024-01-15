import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { FoodtrucksService } from 'src/app/services/foodtrucks.service';
import { FoodTruck } from 'src/app/shared/models/foodtruck';
import { Product } from 'src/app/shared/models/product';
import { sample_products } from 'src/data';

@Component({
  selector: 'app-foodtruck',
  templateUrl: './foodtruck.component.html',
  styleUrls: ['./foodtruck.component.css']
})
export class FoodtruckComponent implements OnInit{
  @Input()
  foodTruckTitle!:string;
  @Input()
  Products!:Product[];
  
  

  constructor(private foodService:FoodtrucksService,private activatedRoute:ActivatedRoute, private dataService:DataserviceService){
    
  }
  ngOnInit(): void {
    //this.setProducts();
  }
  
  
  setProducts():void
  {
    if(this.foodTruckTitle != null)
      this.Products = this.foodService.getProducts().filter(prd => prd.foodTruckTitle === this.foodTruckTitle);
  }
  SetFoodTruck(){
    this.dataService.sharedData = this.foodTruckTitle;
  }

  
}
