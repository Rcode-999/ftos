import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  Products!:Product[];
  ngOnInit(): void {
      if(!this.foodService.isSearched)
      this.setProducts();
  }

  constructor(private foodService:FoodtrucksService,private activatedRoute:ActivatedRoute, private dataService:DataserviceService){
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        this.Products = this.foodService.getAllFoodsBySearchTerm(params.searchTerm).filter(prd => prd.foodTruckTitle === this.foodTruckTitle);
      else if(params.tag)
        this.Products = this.foodService.getAllFoodsByTag(params.tag).filter(prd => prd.foodTruckTitle === this.foodTruckTitle);
      else
        this.setProducts();
    })
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
