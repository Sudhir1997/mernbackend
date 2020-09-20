import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minLength:5}
  });

const schemaUser = mongoose.model('userSchema', userSchema);  

export default schemaUser;




