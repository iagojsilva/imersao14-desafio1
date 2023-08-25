import { Controller, Get, Post } from '@nestjs/common';
import { RouterService } from './router.service';
import { Route } from '@prisma/client';

@Controller('routes')
export class RouterController {
  constructor(private readonly routerService: RouterService) {}

  @Get()
  async findMany() {
    const routes = await this.routerService.findMany();
    return routes;
  }

  @Post()
  async createOne(route: Route) {
    const createdRoute = await this.routerService.createOne(route);
    return createdRoute;
  }
}
