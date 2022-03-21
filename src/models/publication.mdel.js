const mongoose=require("mongoose");

const PublicatioModel=mongoose.Schema({
    name:{type:String,required:true},
},{
    timestamps:true,
    versionKey:false
        
}
);

module.exports=mongoose.model("publicaton",PublicatioModel);