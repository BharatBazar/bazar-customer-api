import mongoose, { Schema, Types } from 'mongoose';
import { productStatus } from './product.interface';

mongoose.model(
    'products',
    new Schema(
        {
            shopId: { type: Types.ObjectId, ref: 'Shop' },
            status: { type: String, enum: productStatus, default: productStatus.INVENTORY },
            parentId: { type: Types.ObjectId, ref: 'ProductCatalogue' },
            colors: { type: [Types.ObjectId], ref: 'ProductColor' },

            // identificationPhoto: String,
            customerIdentificationPhoto: String,
            identificationPhoto: String,

            descriptionGivenBySeller: String,
            descriptionShownToCustomer: String,
            titleGenerated: String,
            showPrice: { type: Boolean, default: false },
            productRating: Number,
            new: Boolean,
            newDeadline: Date,
            discount: [Number],
            discountDeadline: [Date],

            note: { type: [String], default: [] },

            //Mens Jeans Filter
            mens_footwear_sneaker_brand: { type: [Types.ObjectId], ref: 'FilterValues' },
            mens_footwear_sneaker_color: { type: [Types.ObjectId], ref: 'FilterValues' },
            mens_footwear_sneaker_size: { type: [Types.ObjectId], ref: 'FilterValues' },
            mens_jeans_color: { type: [Types.ObjectId], ref: 'FilterValues' },
            means_jeans_size: { type: [Types.ObjectId], ref: 'FilterValues' },
        },
        {
            timestamps: true,
        },
    ),
);

export default mongoose.model('products');
