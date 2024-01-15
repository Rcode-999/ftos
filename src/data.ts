import { FoodTruck } from "./app/shared/models/foodtruck";
import { Person } from "./app/shared/models/person";
import { Product } from "./app/shared/models/product";
import { Tag } from "./app/shared/models/tag";

export const sample_foodtrucks: FoodTruck[] = [
{title:"Duke's"},
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
    {id: 8, name:"Cheese Burger",price: 30, foodTruckTitle:"Chubby's",imageUrl:"assets/cb.jpg",tag:['Burger','Fastfood']},
    {id: 9, name:"Tacos",price: 35, foodTruckTitle:"Sinqdbihle",imageUrl:"assets/cb.jpg",tag:['Tacos','Fastfood']},
    {id: 10, name:"Grilled cheese sandwich",price: 30, foodTruckTitle:"Duke's",imageUrl:"assets/cb.jpg",tag:['Sanwich','Fastfood']},
    {id: 11, name:"Loaded fries",price: 30, foodTruckTitle:"WaffelBak",imageUrl:"assets/cb.jpg",tag:['Fastfood']},
    {id: 12, name:"Fusion burritos",price: 35, foodTruckTitle:"Mama's",imageUrl:"assets/cb.jpg",tag:['Fastfood']},
    {id: 13, name:"Lobster rolls",price: 25, foodTruckTitle:"A's",imageUrl:"assets/cb.jpg",tag:['Fish','Fastfood']},
    {id: 14, name:"Sushi",price: 50, foodTruckTitle:"Chubby's",imageUrl:"assets/cb.jpg",tag:['Fish']},
    {id: 15, name:"Falafels",price: 30, foodTruckTitle:"WaffelBak",imageUrl:"assets/cb.jpg",tag:['Pastry','Fastfood']},
    {id: 16, name:"Funnel cakes",price: 20, foodTruckTitle:"WaffelBak",imageUrl:"assets/cb.jpg",tag:['Pastry']},
    {id: 17, name:"Churros",price: 20, foodTruckTitle:"B's",imageUrl:"assets/cb.jpg",tag:['Fastfood']},
    {id: 18, name:"Cupcakes",price: 10, foodTruckTitle:"WaffelBak",imageUrl:"assets/cb.jpg",tag:['Pastry']},
    {id: 19, name:"Dhal",price: 60, foodTruckTitle:"A's",imageUrl:"assets/cb.jpg",tag:['Recommended']},
    {id: 20, name:"Noodles",price: 20, foodTruckTitle:"B's",imageUrl:"assets/cb.jpg",tag:['Pastry']},
    {id: 21, name:"Kebabs",price: 35, foodTruckTitle:"Duke's",imageUrl:"assets/cb.jpg",tag:['Pastry','Fastfood']},
    {id: 22, name:"Pizza",price: 40, foodTruckTitle:"Chubby's",imageUrl:"assets/cb.jpg",tag:['Pastry','Fastfood']},
    {id: 23, name:"Pretzels",price: 30, foodTruckTitle:"Chubby's",imageUrl:"assets/cb.jpg",tag:['Pastry','Fastfood']},
    {id: 24, name:"Shrimp fritters",price: 30, foodTruckTitle:"A's",imageUrl:"assets/cb.jpg",tag:['Fish','Fastfood']},
    {id: 25, name:"Cheesesteaks",price: 45, foodTruckTitle:"Duke's",imageUrl:"assets/cb.jpg",tag:['Recommended','Fastfood']},
    {id: 26, name:"Corn dogs",price: 20, foodTruckTitle:"Duke's",imageUrl:"assets/cb.jpg",tag:['Fastfood']},
    {id: 27, name:"Meatballs",price: 30, foodTruckTitle:"Duke's",imageUrl:"assets/cb.jpg",tag:[]},
    {id: 28, name:"Fish rings",price: 40, foodTruckTitle:"A's",imageUrl:"assets/cb.jpg",tag:['Fish','Fastfood']},
    {id: 29, name:"Iced tea",price: 15, foodTruckTitle:"Chubby's",imageUrl:"assets/cb.jpg",tag:['Drinks']},
    {id: 30, name:"Coffee",price: 20, foodTruckTitle:"Chubby's",imageUrl:"assets/cb.jpg",tag:['Drinks']},
    {id: 31, name:"Zucchini",price: 30, foodTruckTitle:"WaffelBak",imageUrl:"assets/cb.jpg",tag:['Pastry']},
    {id: 32, name:"Grilled Ribs",price: 45, foodTruckTitle:"Mama's",imageUrl:"assets/cb.jpg",tag:['Fastfood']},
    {id: 33, name:"Chicken salad",price: 30, foodTruckTitle:"Mama's",imageUrl:"assets/cb.jpg",tag:['Salads']},
    {id: 34, name:"Lime chicken",price: 35, foodTruckTitle:"Mama's",imageUrl:"assets/cb.jpg",tag:['Fastfood']},
    {id: 35, name:"Crossaints",price: 35, foodTruckTitle:"WaffelBak's",imageUrl:"assets/cb.jpg",tag:['Pastry']},
    {id: 36, name:"Panini",price: 43, foodTruckTitle:"A's",imageUrl:"assets/cb.jpg",tag:['Pastry']},
    {id: 37, name:"Crab balls",price: 33, foodTruckTitle:"B's",imageUrl:"assets/cb.jpg",tag:['Fastfood']},
    {id: 38, name:"Gourmet Burger",price: 50, foodTruckTitle:"B's",imageUrl:"assets/cb.jpg",tag:['Burger','Fastfood']}

]

export const sample_tags:Tag[] = [
    {name:"Recommended"},
    {name:"Fastfood"},
    {name:"Burger"},
    {name:'Stew'},
    {name:'Pastry'},
    {name:'Fish'},
    {name:'Drinks'},
    {name:'Tacos'}
]