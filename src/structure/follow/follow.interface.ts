import { Types } from 'mongoose';

export interface FollowShop {
    customer: Types.ObjectId;
    shop: Types.ObjectId;
    notification: boolean;
    _id: Types.ObjectId;
}

export interface FollowShopModel extends Document, FollowShop {}
