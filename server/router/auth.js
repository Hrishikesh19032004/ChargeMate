const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const Profile = require("../model/profileSchema");
const profileAuth = require("../middleware/profile");
const EvCharge = require("../model/evStation");
const ejs = require("ejs");
// const sendMail = require("../sendMail");
const nodemailer = require('nodemailer');



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aryavjain8@gmail.com', // Your Gmail email address
      pass: 'uqbafpmiqyfwgecp' // Your Gmail password or App password if 2FA is enabled
    }
  });

  router.get('/sendSOS', async (req, res) => {
    try {
      // Setup email data
      let mailOptions = {
        from: 'aryavjain170804@gmail.com',
        to: 'aryavjain170804@gmail.com', // Recipient email address
        subject: 'SOS Message',
        text: 'This is an SOS message. Please help!'
      };
  
      // Send email
      let info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      
      res.send('SOS email sent successfully!');
    } catch (error) {
      console.error('Error occurred:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  




router.get("/", (req,res)=>{
    res.send("Hello server router page");
})

router.post("/register",async (req,res)=>{
   const { name, email, phone, work, password, cpassword} = req.body;

   if( !name || !email || !phone || !work || !password || !cpassword){
    return res.status(422).json({error:"plz fill all fields properly"})
   }

   try {
    const userExist = await User.findOne({email});
    if(userExist){
        res.status(422).json({error:"User already exist"});
    }else if(password != cpassword){
        res.status(422).json({error:"passwords are not matching"});
    }else{
    const user = new User({name, email, phone, work, password, cpassword});
   const userRegistered =  await user.save();
   console.log(`${user} registered successfully`);
console.log(userRegistered);
    res.status(201).json({message:"user registered successfully!"})}
   } catch (error) {
    console.log(error)
   }
})


//login router
router.post("/signin", async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({error: "plz fill all the details"});
        }
        const userLogin = await User.findOne({email});
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+ 25892000000),
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({message:"Invalid details"});
            }else{
                res.json({message:"user logged in successfully"})
            }
        }else{
            res.status( 400).json({message:"Invalid details"});
        }
        
        // console.log(userLogin);
        
    } catch (error) {
        console.log(error)
    }

})

router.post("/profile",async (req,res)=>{
    const { username, email, phone, carmodel, carnumber, address } = req.body;
 try {
     const userExist = await Profile.findOne({email});
  
     const profile = new Profile({username, email, phone, carmodel, carnumber, address});
    const profileRegistered =  await profile.save();
    console.log(`${profile} created successfully`);

 console.log(profileRegistered);
 const token = await userExist.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+ 25892000000),
                httpOnly:true
            })
     res.status(201).json({message:"profile created successfully!"})
    } catch (error) {
     console.log(error)
    }
 })
// Router Handler


router.post("/evstation", async (req, res) => {
    const { stationName, address, portNum, distance, station } = req.body;
    try {
        const stationExists = await EvCharge.findOne({ station });


        const ev = new EvCharge({ stationName, address, portNum, distance, station });
        const savedEv = await ev.save(); // Corrected method call

        console.log(`${savedEv} created successfully`);
        console.log(savedEv);

        res.status(201).json({ message: "Profile created successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
router.get("/evstation/:station", async (req, res) => {
   
    try {
        const station = req.params.station;
        const data = await EvCharge.find({ station});
        console.log(data)
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// router.get("/evstation/all", async (req, res) => {
//     try {
//         // Retrieve all data from the EvCharge collection
//         const data = await EvCharge.find();
//         console.log(data);
//         return res.status(200).json(data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });





 
 




router.get("/aboutme",authenticate, (req,res)=>{
    console.log("Hello my about");
    res.send(req.userRoot);
})

router.get("/getdata", async (req, res) => {
    try {
        // Query all data from the Profile collection
        const allData = await Profile.find();
        res.json(allData); // Send the data as JSON response
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/contactus",authenticate, async(req,res)=>{
    try {
        const {name,email,phone,message}=req.body;
        if(!name || !email || !phone || !message){
            console.log("Error in contact formm");
            return res.json({
                error:"Plz fill contact form"
            })
        }

        const userContact = await User.findOne({_id:req.userId});
        if(userContact){
            const userMessage = await userContact.addMessage(name,email,phone,message);
            await userContact.save();
            res.status(201).json({message:"User Contact Successful"})
        }
    } catch (error) {
        console.log(error);
    }
})



router.get("/logoutb",authenticate, (req,res)=>{
    console.log("Logout Page");
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send("userLogout");
})



module.exports = router;