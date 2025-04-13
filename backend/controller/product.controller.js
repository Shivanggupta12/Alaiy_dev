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

export const updateProduct = async (req,res) => {
    const {id} = req.params;
    const product = req.body;
    if (!mongoose.isValidObjectId(id)){
        res.status(404).json({success:false, message: "Wrong ID"})
    }
    try{
        const updatedProduct=await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,data:updatedProduct});
    }catch(error){ 
        res.status(500).json({success:false,message:error.message});
    }
}

export const deleteProduct = async (req,res) => {
    const {id} = req.params
    console.log("id:",id)
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "Product deleted successfully"})
    }catch(error){
        res.status(400).json({success:false,message:"Product not found"});
    }
}

export const addProduct = async (req, res) => {
    const product = req.body;
    if(!product.name || !product.price || !product.image){
      return res.status(400).json({success: false, message: "Please provide all fields"});
    }
    const newProduct = new Product(product);
    try{
      await newProduct.save();
      res.status(201).json({success:true,data:newProduct});
    }
    catch(error){
      console.error("error",error.message);
      res.status(500).json({success:false,message:error.message});
    }
  }