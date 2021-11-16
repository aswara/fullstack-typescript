import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, UploadModule],
})
export class AppModule {}
