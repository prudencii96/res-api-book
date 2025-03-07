import { validateJwt } from "../models/users.js"

const noAuthResources={
GET:['/books'],
POST: ['/users/login'],
PATCH: [],
DELETE: [],
}

const authMiddleware=(req, res, next) =>{
    if(noAuthResources[req.method].find(url => url==req.url)){
        return next()
    }
    if(req.headers.jwt){
validateJwt(req.headers.jwt, (err, user)=>{
    if(err){
throw err
    }
    if(user){
        return next()
    }else{
    res.status(401).send('Authentication error')
     }
     
    })
    return
}
    
    res.status(401).send('Authentication error')
}

export default authMiddleware