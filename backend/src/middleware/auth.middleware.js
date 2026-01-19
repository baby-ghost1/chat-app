import jwt from 'jsonwebtoken'
import User from '../models/User'
import { ENV } from '../lib/env'

export const protectRoute = async (req, res, next ) => {
    try{
        const token = req.cookies.jwt
        if(!token) return res.status(401).json({message:'Unauthorized - No Token provided'})

        const decoded = jwt.verify(token, ENV.JWT_SECRET)
        if(!decoded) return res.status(401).json({message:'Unauthorized - invalid token'})

        const user = await User.findById(decoded.userId).select('-password')
        if(!user) return res.status(401),json({message: 'user not found'})

        req.user = user

        next()
    }catch(error){
        console.log(`Error in middleware: ${error}`)
        res.status(401).json({message:'internal server error'})
    }
}