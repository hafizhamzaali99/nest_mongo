import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products/products.controller';
// import { Products } from './products/products';
import { ProductsModule } from './products/products.module';
import { ProductSchema } from './products/products.schema';
import { ProductsService } from './products/products.service';

@Module({
  // imports: [
  //   MongooseModule.forRoot('mongodb://localhost:27017' , {dbName:'nest_crud'}),
  //   MongooseModule.forFeature([{name:"Product", schema:ProductSchema}]),
  //   ProductsModule,
  // ],
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest_crud'),
    MongooseModule.forFeature([{name:"Product", schema:ProductSchema}]),
    ProductsModule
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
