// basically these page is for role management 

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth =(req,res) => {
    try{
        const token = req.body.token;
        if(!token){
            return res.status(401).json({
                succes:false,
                message:`token is missing`
            });
        }
        try{

            const payload = jwt.verify(token,process.env.JWT-SECRET);
               console.log(payload);
                req.user = payload;
        }catch(error){
            return res.status(401).json({
                succes:false,
                message:`Token is invalid`
            });
        }
        next();
    }catch(error){
        return res.status(401).json({
            succes:false,
            message:`Something went wrong, While verifying the token`
        })
    }
}


exports.isStudent = (req,res,next) => {
    try{
        if(req,user,role != "Student"){
            return res.status(401).json({
                succes:false,
                message:`This is protcted route for students`
            });
        }
        next();

    }catch(error){
        return res.status(401).json({
            succes:false,
            mesaage:`User is not matching`
        });
    }
}

exports.isAdmin = (req,res,next) =>{
    try{

        if((req.user.role != "Admin")){
            return res.status(401).json({
                success:false,
                message:`This is protected for Admin`
            });
        }
    }catch(error){
        return res.status(500).json({
            success:false,
            message:`User role is not matching`
        });
    }
}