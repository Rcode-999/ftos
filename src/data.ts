import { FoodTruck } from "./app/shared/models/foodtruck";
import { Person } from "./app/shared/models/person";
import { Product } from "./app/shared/models/product";
import { Tag } from "./app/shared/models/tag";

export const sample_foodtrucks: FoodTruck[] = [{title:"Duke's"},
{title:"Sinqdbihle"},
{title:"WaffelBak"},
{title:"Chubby's"},
{title:"Mama's"},
{title:"B's"},
{title:"A's"}];


export const sample_persons: Person[] = [
{name:"Rubin Minnie",
comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
imageUrl:"assets/m1_resized.jpg"},
{name:"Abbbbb Rnnnnn",
comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
imageUrl:"assets/m2_resized.jpg"},
{name:"Cgggi Mnnio",
comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
imageUrl:"assets/m3_resized.jpg"},
]

export const sample_products: Product[] = [
    {id: 1, name:"Beef rice",price: 20, foodTruckTitle:"Sinqdbihle",imageUrl:"assets/cb.jpg",tag:['Fastfood','Recommended']},
    {id: 2, name:"Egg rice",price: 30, foodTruckTitle:"Duke's",imageUrl:"assets/cb.jpg",tag:['Recommended']},
    {id: 3, name:"Chicken Waffel Burger",price: 20, foodTruckTitle:"WaffelBak",imageUrl:"assets/cb.jpg",tag:['Fastfood','Recommended','Burger']},
    {id: 4, name:"Beef Waffel Burger",price: 30, foodTruckTitle:"WaffelBak",imageUrl:"assets/cb.jpg",tag:['Recommended','Burger','Fastfood']},
    {id: 5, name:"Beef stew",price: 20, foodTruckTitle:"Mama's",imageUrl:"assets/cb.jpg",tag:['Recommended','Stew']},
    {id: 6, name:"Hamburger",price: 30, foodTruckTitle:"Duke's",imageUrl:"assets/cb.jpg",tag:['Recommended','Fastfood','Burger']},
    {id: 7, name:"Chicken Kota",price: 20, foodTruckTitle:"A's",imageUrl:"assets/cb.jpg",tag:['Fastfood']},
    {id: 8, name:"Cheese Burger",price: 30, foodTruckTitle:"Chubby's",imageUrl:"assets/cb.jpg",tag:['Burger','Fastfood']}
]

export const sample_tags:Tag[] = [
    {name:"Recommended"},
    {name:"Fastfood"},
    {name:"Burger"},
    {name:'Stew'}
]