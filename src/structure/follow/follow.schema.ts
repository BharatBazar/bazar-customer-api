import { FollowShopModel } from './follow.interface';
import { Types, Schema, Model, model } from 'mongoose';

export const FollowSchema = new Schema({
    customer: { type: Types.ObjectId, ref: 'Customer' },
    shop: { type: Types.ObjectId, ref: 'Shop' },
    notification: { type: Boolean, default: false },
});

export const FollowShop: Model<FollowShopModel> = model<FollowShopModel>('FollowShop', FollowSchema);
