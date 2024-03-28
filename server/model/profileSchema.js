const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const profileSchema = new mongoose.Schema({
    username:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    phone:{
        type:Number,
        
    },
    address:{
        type:String,
        
    },
    carmodel:{
        type:String,

    },
    carnumber:{
        type:String,

    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})


 profileSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this.id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
 }

 profileSchema.methods.addMessage = async function(name,email,phone,message){
try {
    this.messages =  this.messages.concat({name,email,phone,message});
    await this.save();
    return this.messages;
} catch (error) {
    console.log(error);
}
 }
const Profile = mongoose.model("PROFILE",profileSchema);

module.exports = Profile;

