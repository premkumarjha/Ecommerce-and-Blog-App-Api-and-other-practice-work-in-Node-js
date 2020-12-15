const jwt = require('jsonwebtoken');

auth = (req, res, next) => {
    const token = req.headers.authorization
    if(!token){
        return res.send({output:"access denied"})
    }
    try {
        //below line means ki split with "" and 1st index ke conten ko token me save .
        //const token = req.headers.authorization.split(" ")[1]; 

        const token = req.headers.authorization

        //const token=authorization.replace("Bearer","");

        //console.log(req)
        console.log(token);
        //const decoded = jwt.verify(token, "sgdiudhwedh");
          //console.log("hii")
        //console.log(decoded)
        //console.log("ram")
        //console.log(req);

        //req.userData = decoded;
        //console.log(req.userData)
        //next();

        jwt.verify(token,"abcdefgh",(err,payload)=>{
                    if(err){
                     return   res.status(401).json({error:"permission denied"})
                    }
            //email,password was payload when we are generating token
                    //const {name} = payload
                    // User.findById(email).then(userdata=>{
                    //     req.user = userdata
                    //     next()
                    // })

                    req.user = payload

                    console.log(payload.name);
                    
                    next()
                })
      
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};
module.exports=auth;


// module.exports = (req,res,next)=>{
//     const {authorization} = req.headers
//     //authorization === Bearer ewefwegwrherhe
//     if(!authorization){
//        return res.status(401).json({error:"you must be logged in"})
//     }
//     const token = authorization.replace("Bearer ","")
//     jwt.verify(token,JWT_SECRET,(err,payload)=>{
//         if(err){
//          return   res.status(401).json({error:"you must be logged in"})
//         }

//         const {_id} = payload
//         User.findById(_id).then(userdata=>{
//             req.user = userdata
//             next()
//         })
        
        
//     })
// }