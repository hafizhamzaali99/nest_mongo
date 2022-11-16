import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products/products.controller';
import { Products } from './products/products';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'), ProductsModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, Products],
})
export class AppModule {}
