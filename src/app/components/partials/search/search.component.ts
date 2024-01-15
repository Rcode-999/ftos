import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodtrucksService } from 'src/app/services/foodtrucks.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm = '';

  constructor(activatedRoute:ActivatedRoute, private router:Router, private foodService:FoodtrucksService){
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.searchTerm = params.searchTerm;
    });
  }

  search(term:string):void{
    if(term){
      this.router.navigateByUrl('/foodtrucks/search/' + term);
    }
  }
}
