import { Injectable } from '@nestjs/common';
import { BufferedFile } from '../minio/file.model';
import { MinioClientService } from '../minio/minio.service';

@Injectable()
export class UploadService {
  constructor(private minioClientService: MinioClientService) {}

  async uploadImage(file: BufferedFile) {
    const uploaded = await this.minioClientService.upload(file);

    return {
      url: uploaded.url,
      message: 'Image successful',
    };
  }
}
