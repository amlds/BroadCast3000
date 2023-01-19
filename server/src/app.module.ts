import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleServiceService } from './google-service/google-service.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GoogleServiceService],
})
export class AppModule {}
