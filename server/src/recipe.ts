import * as mongodb from "mongodb";
 
export interface Recipe {
  name: string;
  category: string;
  descrption: string;
  ingredients: string;
  notes: string;
  origin: string;
  _id?: mongodb.ObjectId;
}