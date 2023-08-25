import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RouterModule } from './router/router.module';

@Module({
  imports: [PrismaModule, RouterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
