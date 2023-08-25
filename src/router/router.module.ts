import { Module } from '@nestjs/common';
import { RouterService } from './router.service';
import { RouterController } from './router.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RouterService],
  controllers: [RouterController],
})
export class RouterModule {}
