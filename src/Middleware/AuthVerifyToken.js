const jwt = require("jsonwebtoken")
const {promisify} = require("util");



exports.AuthVerifyToken = async(req,res,next)=>{

    try {
        const token = req.headers?.authorization.split(" ")?.[1];

        if(!token){
            return res.status(401).json({status:"failed", error:"you are not logged In"})
        }

        const decoded = await promisify(jwt.verify)(token,"SecretKey123")

        // const user = await User.findOne({email:decoded.email})

        req.user = decoded
        next()

    } catch (error) {
        return res.status(403).json({status:"failed", error:"Invalid token"})
    }
}