import * as mongodb from "mongodb";
import { Recipe } from "./recipe";
 
export const collections: {
   recipes?: mongodb.Collection<Recipe>;
} = {};
 
export async function connectToDatabase(uri: string) {
   const client = new mongodb.MongoClient(uri);
   await client.connect();
 
   const db = client.db("recipes");
   await applySchemaValidation(db);
 
   const recipesCollection = db.collection<Recipe>("recipes");
   collections.recipes = recipesCollection;
}
 
// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Employee model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
   const jsonSchema = {
       $jsonSchema: {
           bsonType: "object",
           required: ["name", "category", "description", "ingredients", "notes", "origin"],
           additionalProperties: false,
           properties: {
               _id: {},
               name: {
                   bsonType: "string",
                   description: "'name' is required and is a string",
               },
              //  TODO: add the remaining category options
               category: {
                   bsonType: "string",
                   description: "'category' is required and is one of 'Breakfast', 'Entre' or 'Dessert'",
                   enum: ["Breakfast", "Entre", "Dessert"],
               },
               description: {
                   bsonType: "string",
                   description: "'description' is required and is a string",
               },
               ingredients: {
                   bsonType: "string",
                   description: "'ingredients' is required and is a string",
               },
               notes: {
                   bsonType: "string",
                   description: "'notes' is required and is a string",
                   enum: ["Breakfast", "Entre", "Dessert"],
               },
               origin: {
                   bsonType: "string",
                   description: "'origin' is required and is a string",
               },
           },
       },
   };
 
   // Try applying the modification to the collection, if the collection doesn't exist, create it
  await db.command({
       collMod: "recipes",
       validator: jsonSchema
   }).catch(async (error: mongodb.MongoServerError) => {
       if (error.codeName === 'NamespaceNotFound') {
           await db.createCollection("recipes", {validator: jsonSchema});
       }
   });
}