import { Module } from '@nestjs/common';
import { MinioClientModule } from '../minio/minio.module';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
  imports: [MinioClientModule],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
