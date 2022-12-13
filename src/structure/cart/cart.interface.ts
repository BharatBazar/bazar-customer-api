import { Types } from 'mongoose';

export interface CartData {
    _id: Types.ObjectId;
    customer: Types.ObjectId;
    shop: Types.ObjectId;
    catalogue: Types.ObjectId;
    size: Types.ObjectId;
    quantity: number;
    ratePerUnit: number;
}
