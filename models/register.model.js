import mongoose from 'mongoose';
const { Schema } = mongoose;
import bcrypt from 'bcryptjs';


const usermasters = new Schema({

    userId: {
        type: String,
        unique: true, // Ensures the userId is unique
    },
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true,
        match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please fill a valid email address'],
    },
    password: {
        required: true,
        type: String,
    },
    confirmPassword: {
        required: true,
        type: String,
    },
    phone: {
        required: true,
        type: String,
    }
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'last_updated_at',
        },
    });

usermasters.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

usermasters.pre('save', async function (next) {
    if (this.isNew) {
        const lastUser = await this.constructor.findOne().sort({ userId: -1 }).exec();
        let newUserId;

        if (lastUser) {
            const lastIdNumber = parseInt(lastUser.userId.replace('user', ''));
            newUserId = `user${(lastIdNumber + 1).toString().padStart(2, '0')}`;
        } else {
            newUserId = 'user01';
        }

        this.userId = newUserId;
    }
    next();
});

export default mongoose.model('usermasters', usermasters);
