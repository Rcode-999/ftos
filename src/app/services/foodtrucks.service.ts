import { Injectable } from '@angular/core';
import { sample_foodtrucks, sample_products, sample_tags } from 'src/data';
import { FoodTruck } from '../shared/models/foodtruck';
import { Product } from '../shared/models/product';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodtrucksService {
 isSearched = false;
  constructor() { }

  getALL():FoodTruck[]{
    return sample_foodtrucks;
  }

  getProducts():Product[]{
    return sample_products;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getProducts().filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }


  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllFoodsByTag(tag:string):Product[]{
    return this.getProducts().filter(product => product.tag?.includes(tag));
  }

  getProductsById(productID: number): Product{
    return this.getProducts().find(product => product.id == productID) ?? new Product();
  }
}
