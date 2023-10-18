import { Resolver, Query, Mutation, Args, Context, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';

import { ProductType } from './product.type';


@Resolver()
export class ProductResolver {
    constructor(private readonly productService: ProductService) {}

    @Query((returns) => [ProductType])
    async getProducts(
        @Args('skip', { type: () => Int, defaultValue: 0 }) skip: number,
        @Args('take', { type: () => Int, defaultValue: 1 }) take: number,
    ): Promise<ProductType[]> {
        console.log('skip!', skip, 'take!', take);
        return await this.productService.getProducts(skip, take);
    }

}
