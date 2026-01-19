import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import generateToken from "../lib/utils.js";
import 'dotenv/config';
import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";
import cloudinary from "../lib/cloudinary.js";



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

        if (newUser.email) {
            sendWelcomeEmail(
                newUser.email,
                newUser.fullName,
                process.env.CLIENT_URL
            ).catch(err => {
                console.error("Welcome email failed:", err.message);
            });
        }

        return res.status(201).json({
          message: "User created successfully",
          _id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          mobile: newUser.mobile,
          profilePic: newUser.profilePic,
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    // never tell the client which one is incorrect: password or email

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



export const logout = (_, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json({ message: "Logged out successfully" });
};




export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    if (!profilePic) return res.status(400).json({ message: "Profile pic is required" });

    const userId = req.user._id;

    const uploadResponse = await cloudinary.uploader.upload(profilePic);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploadResponse.secure_url },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Error in update profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};