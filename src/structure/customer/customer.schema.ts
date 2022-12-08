import { Schema, model, Model } from 'mongoose';
import { CustomerModel } from './customer.interface';

const CustomerSchema: Schema = new Schema({
    firstName: String,
    lastName: String,
    image: String,
    phone: { type: String, unique: true, require: true },
    gender: { type: String, enum: ['M', 'F', 'O'] },
    password: String,
    waistSize: Number,
    height: Number,
    dob: Date,
    color: String,
    photo: String,
});

export const Customer: Model<CustomerModel> = model<CustomerModel>('Customer', CustomerSchema);
