const jwt = require('jsonwebtoken');
const authenticate=(req,res,next)=>{
    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader.split(' ')[1];

    if(!token) return res.sendStatus(401);

    jwt.verify(token,process.env.jwt_secret_key,(err,user)=>{
        if(err)
        {
            res.sendStatus(403);
        }
        req.user=user;
        next();
    })

}

module.exports=authenticate;