'use strict';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const usermasters = new Schema(
    {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        password: {
            type: Number
        },
        confirmPassword: {
            type: Number,
        },
        id: {
            type: Number
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });
export default mongoose.model('usermasters', usermasters);
