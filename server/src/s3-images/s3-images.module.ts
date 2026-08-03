import { Module } from '@nestjs/common';
import { S3ImagesService } from './s3-images.service';

@Module({
  providers: [S3ImagesService],
  exports: [S3ImagesService],
})
export class S3ImagesModule {}
