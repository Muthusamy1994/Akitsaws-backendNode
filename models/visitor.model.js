'use strict';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const visitormasters = new Schema(
    {
        visitorname: {
            type: String
        },
        visitortype: {
            type: String
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        }, 
        companyname: {
            type: Number
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
export default mongoose.model('visitormasters', visitormasters);
