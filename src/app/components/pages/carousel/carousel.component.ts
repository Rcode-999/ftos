import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { FoodtrucksService } from 'src/app/services/foodtrucks.service';
import { Product } from 'src/app/shared/models/product';
import { __param } from 'tslib';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnChanges{
  @Input()
  controls = true;

  @Input()
  autoSlide = false;

  @Input()
  slideInterval = 3000;

  Products!:Product[];
  
  isSearched:boolean = false;
  isTagged:boolean = false;
  searchTerm!:string;
  tag!:string;
  constructor(private foodTruckService: FoodtrucksService, private dataService:DataserviceService, private activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
      

    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.selectedIndex)
    window.localStorage.setItem("FoodTruck Index", JSON.stringify(this.selectedIndex));
  }
  foodTruck = this.dataService.sharedData;
  
  foodTrucks = this.foodTruckService.getALL();
  setFoodTruck(){
    if(this.foodTruck != null){
      this.selectedIndex = this.foodTrucks.findIndex((truck: { title: string; }) => truck.title === this.foodTruck);
    }
  }
  selectedIndex = 0;
   
  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.foodTrucks.length - 1;
    }
    else{
      this.selectedIndex--;
    }

    window.localStorage.setItem("FoodTruck Index Prev", JSON.stringify(this.selectedIndex));
  }

  onNextClick(): void{
    if(this.selectedIndex === this.foodTrucks.length - 1){
      this.selectedIndex = 0;
    }
    else
      this.selectedIndex++;
    
      window.localStorage.setItem("FoodTruck Index Next", JSON.stringify(this.selectedIndex));
  }
  autoSlideTrucks(): void{
    setInterval(() => {
      this.onNextClick();
    },this.slideInterval)
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.searchTerm){
        this.searchTerm = params.searchTerm;
      this.isSearched = true;
    }
    else if(params.tag){
    this.tag = params.tag;
      this.isTagged = true;
    }
    })
    if(this.autoSlide){
      this.autoSlideTrucks();
    }
    if(this.foodTruck != null)
      this.setFoodTruck();
  }

  getProducts(foodtruckTitle:string):Product[]{
    return this.Products = this.foodTruckService.getAllProductsByName(foodtruckTitle);
  }
 setProducts(prdTitle:string):Product[]{
  if(this.isSearched == true)
  return this.Products =  this.foodTruckService.getProducts().filter(prd => prd.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())).filter(prd => prd.foodTruckTitle === prdTitle);
  else if(this.isTagged == true)
  return this.Products = this.foodTruckService.getProducts().filter(prd => prd.tag?.includes(this.tag)).filter(prd => prd.foodTruckTitle === prdTitle);
  else
  return this.Products = this.foodTruckService.getProducts().filter(prd => prd.foodTruckTitle === prdTitle);
 }


}
