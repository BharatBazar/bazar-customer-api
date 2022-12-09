import { Types } from 'mongoose';
export enum gender {
    male = 'M',
    female = 'FM',
    other = 'O',
}

export interface CustomerData {
    firstName: string;
    lastName: string;
    gender: gender;
    phone: string;
    password: string;
    waistSize: number;
    height: number;
    dob: Date;
    color: string;
    photo: string;
    _id: Types.ObjectId;
}

export interface CustomerModel extends Document, CustomerData {}
