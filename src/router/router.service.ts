import { Injectable } from '@nestjs/common';
import { Route } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RouterService {
  constructor(private readonly prisma: PrismaService) {}

  public async createOne(route: Route) {
    const createdRoute = await this.prisma.route.create({
      data: route,
    });

    return createdRoute;
  }

  public async findMany() {
    const routes = await this.prisma.route.findMany({});
    return routes;
  }
}
