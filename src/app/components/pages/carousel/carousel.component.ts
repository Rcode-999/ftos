import { Component, Input, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { FoodtrucksService } from 'src/app/services/foodtrucks.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  @Input()
  controls = true;

  @Input()
  autoSlide = false;

  @Input()
  slideInterval = 3000;

  constructor(private foodTruckService: FoodtrucksService, private dataService:DataserviceService){}
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
  }

  onNextClick(): void{
    if(this.selectedIndex === this.foodTrucks.length - 1){
      this.selectedIndex = 0;
    }
    else
      this.selectedIndex++;
  }
  autoSlideTrucks(): void{
    setInterval(() => {
      this.onNextClick();
    },this.slideInterval)
  }

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideTrucks();
    }
    if(this.foodTruck != null)
      this.setFoodTruck();
  }


  Products = this.foodTruckService.getProducts();

}
