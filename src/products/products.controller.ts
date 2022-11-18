import { Controller, Delete, Get, Param, Post, Put, Body } from '@nestjs/common';
import { ProductDTO } from './products.dto';
import { Product } from './products.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor( private readonly productsService:ProductsService){}

    @Get('all')
    getAllProducts(){
        const Products = this.productsService.getAllProducts()
        return(Products)
    }

    @Get(':id')
    getProduct(
        @Param('id') id: string
    ) : Promise<Product> {
        const Product = this.productsService.getProduct(id)
        return Product
    }
    
    @Post('create')
    createProduct(
        @Body('product') product:ProductDTO
    ) : Promise<Product>{
        const Product = this.productsService.createProduct(product)
        return Product
    }

    @Delete(':id')
    deleteProduct(
        @Param('id') id:string
    ):Promise<Product>{
        const Product = this.productsService.deleteProduct(id)
        return 
    }

    @Put('update')
    updateProduct(
        @Param('id') id:string,
        // @Body()
    ){
        return 
    }
}
