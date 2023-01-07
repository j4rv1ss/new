import { pokemon } from "../model/pokemon.js";
import Error from "../utils/error.js"
import tryCatch from "../middleware/tryCatch.js";

export const addPokemon = tryCatch(async(req,res,next)=>{
    const data = req.body
    const {name,attacks,abilities}= data
    const image = req.files.image.tempFilePath;

    if(!data.name.match(/[a-zA-Z]$/)){
        return next(new Error("please provide only letters",400))
    }

    const findPokemon = await pokemon.findOne({name})
    if(findPokemon){
        return next(new Error("pokemon already existed",400))
    }

    const myCloud = await cloudinary.v2.uploader.upload(image,{
        folder:"pokemon"
    })

    fs.rmSync("./tmp" , {recursive:true})

    let saveData = await pokemon.create({name,attacks,abilities,image:{public_id:myCloud.public_id,url:myCloud.secure_url}})

    return res.status(201).send({status:true,data:saveData})


})

export const getPokemon = tryCatch(async(req,res,next)=>{
    const pokemonData = await pokemon.find()
    if(!pokemonData){
        return next(new Error("no data found",400))

    }
    return res.status(200).send({status:true,total:`${pokemonData.length}`,data:pokemonData})

})