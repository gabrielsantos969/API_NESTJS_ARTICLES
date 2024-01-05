import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma/prisma.module';
import { StartModule } from './modules/start/start.module';
import { ArticlesModule } from './modules/articles/articles.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, StartModule, ArticlesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
