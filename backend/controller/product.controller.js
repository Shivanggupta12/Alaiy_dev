import Product from "../models/product.model.js";
import mongoose from "mongoose";
export const getProduct = async (req,res) => {
    try{
        const products = await Product.find();
        res.status(200).json({success:true,data:products});
    }catch(error){ 
        console.log("error fetching");
        res.status(500).json({success:false,message:error.message});
    }
}
