const Product = require("../models/product.js");
const User = require("../models/user");
const {comparePassword} = require("../helpers/auth");
const jwt = require("jsonwebtoken");



exports.insert = async (req, res) => {
    try {
        // 1. destructure name, email, password from req.body
        const { name, price} = req.body;
        // 2. all fields require validation
        if (!name.trim()){
            return res.json({ error: "Name is required" });
        }
        if (!price){
            return res.json({ error: "Email is required" });
        }

        const product = await new Product({
            name:name,
            price:price,
        }).save();


        // 7. send response
        res.json({
            status:"Product Add Successfully",
            product: {
                name: product.name,
                price: product.price
            },
        });
    } catch (err) {
        console.log(err);
    }
};


exports.product = async (req, res) => {
    try{
           const product = await Product.find();
        res.json({
            product:product
        });
    }catch (err) {
           console.log(err);
    }
};



