// let express = require('express'); 
// let cookieParser = require('cookie-parser'); 
// //setup express app 
// let app = express() 
  
// app.use(cookieParser()); 
  
  
// //basic route for homepage 
// app.get('/', (req, res)=>{ 
// res.send('welcome to express app'); 
// }); 
  
// //JSON object to be added to cookie 
// let users = { 
// name : "prem", 
// Age : "18"
// } 
  
// //Route for adding cookie 
// app.get('/setuser', (req, res)=>{ 
// res.cookie("userData", users); 
// res.send('user data added to cookie'); 
// }); 
  
// //Iterate users data from cookie 
// app.get('/getuser', (req, res)=>{ 
// //shows all the cookies 
// res.send(req.cookies); 
// }); 
  
// //server listens to port 3000 
// app.listen(3000, (err)=>{ 
// if(err) 
// throw err; 
// console.log('listening on port 3000'); 
// }); 






//*******************************************Below is session*********************************************** */

const express = require("express") 
const session = require('express-session') 
const app = express() 
    
// Port Number Setup 
var PORT = process.env.port || 3000 
   
// Session Setup 
app.use(session({ 
  
    // It holds the secret key for session 
    secret: 'Your_Secret_Key', 
  
    // Forces the session to be saved 
    // back to the session store 
    resave: false, 
  
    // Forces a session that is "uninitialized" 
    // to be saved to the store 
    saveUninitialized: true
})) 
   
app.get("/", function(req, res){ 
       
    // req.session.key = value 
    req.session.name = 'GeeksforGeeks'
    return res.send("Session Set") 
}) 
   
app.get("/session", function(req, res){ 
   
    var name = req.session.name 
    return res.send(name) 
   
    /*  To destroy session you can use 
        this function  
     req.session.destroy(function(error){ 
        console.log("Session Destroyed") 
    }) 
    */
}) 
    
app.listen(PORT, function(error){ 
    if(error) throw error 
    console.log("Server created Successfully on PORT :", PORT) 
}) 