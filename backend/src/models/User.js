import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        unique: true,
        sparse: true,   //sparse: true allow karta hai ki email ya mobile me se ek missing ho
    },
    mobile: {
        type: String,
        unique: true,
        sparse: true,   //important
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    profilePic: {
        type: String,
        default: ""
    },
}, { timestamps: true }  // createdAt and updatedAt
);

const User = mongoose.model('User', userSchema);

export default User;
