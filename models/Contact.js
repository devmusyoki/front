import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'FullName is Required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is Requird"],
        trim: true
    },
    phone: {
        type: String,
        required: [true, "Phone is required"],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model.Contact || mongoose.model('Contact', ContactSchema)