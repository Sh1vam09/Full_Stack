import mongoose, { Schema, model, models } from 'mongoose';

export interface IProduct {
    name: string;
    price: number;
    stock: number;
    image: string;
}

const ProductSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: { type: String, required: true },
});

export const Product = models.Product || model<IProduct>('Product', ProductSchema);