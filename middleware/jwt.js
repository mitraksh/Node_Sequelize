const jwt = require('jsonwebtoken')
const {UnauthoirzedError} = require('../errors')

class JwtToken{
    constructor(firstName,lastName,username){
        this.firstName = firstName
        this.lastName = lastName
        this.username = username

    }
    generate(){
        const token = jwt.sign(JSON.stringify(this), "my_jwt_secret_key");
        return token
    }
    static async verify(req,res,next){
        console.log(req.cookies);
        const tokenValue = req.cookies["authorization"]
        console.log("tokenValue", tokenValue);
        if (!tokenValue) {
          console.log("token not found");
          throw new UnauthoirzedError("JWT Token not found")
        }
        const obj = await jwt.verify(tokenValue, "my_jwt_secret_key")
        console.log(obj);
        next()
    }
}
module.exports = JwtToken