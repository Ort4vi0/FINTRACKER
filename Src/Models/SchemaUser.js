import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    Name:{type: String, required: true},
    Email:{type: String, required: true, unique: true},
    Password:{type: String, required: true},
    Roles:{
        type: [{
            type: String,
            enum: ['user', 'admin', 'owner']
        }],
        default:['user']
    }
})

const UserMGS = mongoose.model('User', UserSchema)
export default UserMGS