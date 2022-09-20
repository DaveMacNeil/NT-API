import { Module } from '@nestjs/common';
import { ControllerModule } from './controllers/controller.module';
import { ServiceModule } from './services/service.module';

@Module({
  imports: [ServiceModule, ControllerModule],
})
export class AppModule {}
