import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
    const {JWT_SECRET} = process.env;
    if(!JWT_SECRET) throw new Error('JWT_SECRET is not configured');
    
    const token = jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    res.cookie("jwt", token, {
        httpOnly: true,  // prevent XSS attacks
        secure: process.env.NODE_ENV === "development" ? false : true,
        sameSite: "strict",  // CSRF attacks
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return token;
};

export default generateToken;
