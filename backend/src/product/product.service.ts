import {
    Injectable
  } from '@nestjs/common';
  import { PrismaService } from 'src/prisma.service';
  import { ProductType } from './product.type';
  

@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService) {}

    async getProducts(skip: number, take: number): Promise<ProductType[]> {
        return await this.prisma.product.findMany({
          skip,
          take,
          include: { user: true, transaction: true },
          orderBy: { createdAt: 'desc' },
        });
    }
}
