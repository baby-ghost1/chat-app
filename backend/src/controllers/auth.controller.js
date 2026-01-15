import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import generateToken from "../lib/utils.js";

export const signup = async (req, res) => {
    const { fullName, email, mobile, password } = req.body;

    try {
        // Basic check
        if (!fullName || !password || (!email && !mobile)) {
            return res.status(400).json({
                message: "Full name, password and either email or mobile is required"
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters"
            });
        }

        // Email validation (if provided)
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ message: "Invalid email format" });
            }
        }

        // Mobile validation (if provided)
        if (mobile) {
            const mobileRegex = /^[6-9]\d{9}$/; // Indian mobile
            if (!mobileRegex.test(mobile)) {
                return res.status(400).json({ message: "Invalid mobile number" });
            }
        }

        // Check existing user
        const existingUser = await User.findOne({
            $or: [
                email ? { email } : null,
                mobile ? { mobile } : null
            ].filter(Boolean)
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with this email or mobile"
            });
        }

         // 🔐 HASH PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        // Create user
        const newUser = await User.create({
            fullName,
            email,
            mobile,
            password: hashedPassword
        });

        generateToken(newUser._id, res);

        return res.status(201).json({
          message: "User created successfully",
          _id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          mobile: newUser.mobile,
          profilePic: newUser.profilePic,
        });

        // todo: send a welcome email to user

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};
