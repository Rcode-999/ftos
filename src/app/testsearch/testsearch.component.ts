import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { FoodtrucksService } from '../services/foodtrucks.service';
import { DataserviceService } from '../services/dataservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testsearch',
  templateUrl: './testsearch.component.html',
  styleUrls: ['./testsearch.component.css']
})
export class TestsearchComponent implements OnInit {
  @Input()
  foodTruckTitle!:string;
Products:Product[] = [];
constructor(private foodService:FoodtrucksService,private dataService:DataserviceService,private activatedRoute:ActivatedRoute){

}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.searchTerm)
      this.Products = this.foodService.getProducts().filter(prd => prd.name.toLocaleLowerCase().includes(params.searchTerm.toLocaleLowerCase()));
    })
  }
  SetFoodTruck(){
    this.dataService.sharedData = this.foodTruckTitle;
  }
}
