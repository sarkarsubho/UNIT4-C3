const mongoose= require("mongoose");

const bookSchema= newmongoose.Schema(
    {
        likes:{type:Number,required:true},
        coverImage:{type:String,required:true},
        content:{type:String,required:true},

    },{
        timestamps:true,
        versionKey:false
        
    }
);

module.exports = mongoose.model("books",bookSchema);

