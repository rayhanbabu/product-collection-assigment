const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        price: {
            type: Number,
            trim: true,
            required: true,

        },
        description : {
            type: String,

        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true, versionKey:false }
);

const Product = mongoose.model("Product", userSchema);
module.exports = Product;