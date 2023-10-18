import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/user.model';
import { ProductType } from 'src/product/product.type';

@ObjectType()
export class Transaction {
  @Field(() => Int)
  id: number;

  @Field()
  userId: number;

  @Field(() => User)
  user: User;

  @Field()
  productId: number;

  @Field(() => ProductType)
  product: ProductType;

  @Field()
  createdAt: Date;

  @Field()
  type: string;

  @Field()
  status?: string;

  @Field()
  note?: string;
}