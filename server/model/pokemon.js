import mongoose from "mongoose";


const pokemonSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true,
    trim:true
   },
   attacks:{
    type:[String],
    required:true
   },
   abilities:{
    type:[String],
    required:true
   },
   image:{
    public_id:String,
    url:String,
   }

})

export const pokemon= mongoose.model("pokemon",pokemonSchema)