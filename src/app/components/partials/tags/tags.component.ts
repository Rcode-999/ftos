import { Component } from '@angular/core';
import { FoodtrucksService } from 'src/app/services/foodtrucks.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];

  constructor(foodservice:FoodtrucksService){
    this.tags = foodservice.getAllTags();
  }
}
