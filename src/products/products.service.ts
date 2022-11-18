import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.interface';

@Injectable()
export class ProductsService {

    constructor( @InjectModel('Product') private readonly productModel:Model<Product>) {}

    async getAllProducts() {
        return await this.productModel.find()
    }

    async getProduct(id:string):Promise<Product> {
        return await this.productModel.findOne({_id:id})
    }

    async createProduct(product:Product):Promise<Product>{
        const Product = await this.productModel.create(product)
        return Product
    }

    async deleteProduct( id:string ):Promise<Product> {
        const Product = await this.productModel.findByIdAndRemove(id)
        return Product
    }

    async updateProduct(id:string , product:Product):Promise<Product> {
        const Product = await this.productModel.findByIdAndUpdate(id,product,{new:true})
        return Product
    }
}
