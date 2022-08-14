const mongoose =require("mongoose");

const productSchema = new mongoose.Schema({
   title:{type:String, required:true, unique:true},
   desc:{type:String,required:true},
   firstimg:{type:String,required:true},
   secondimg:{type:String,required:true},
   categories:{type:Array},
   color:{type:Array},
   price:{type:Number,required:true},
   inStock:{type:Boolean,default:true},
   sale:{type:String}
},{
    timestamps:true
});
module.exports = mongoose.model("Product",productSchema);

