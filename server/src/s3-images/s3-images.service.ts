// import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
// import { BadRequestException, Injectable } from '@nestjs/common';
// import sharp from 'sharp';

// @Injectable()
// export class S3ImagesService {
//   private readonly s3Client: S3Client;

//   constructor() {
//     this.s3Client = new S3Client({
//       region: process.env.AWS_REGION || 'ru-1',
//       endpoint: process.env.AWS_S3_ENDPOINT,
//       credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//       },
//       forcePathStyle: true, // Обязательно для S3-совместимых хранилищ (Timeweb, MinIO и т.д.)
//     });
//   }

//

//   private deleteImage(filename: string): void {
//     const safeFilename = normalize(filename);
//     const filePath = resolve(FILE_UPLOADS_DIR, safeFilename);

//     const relativePath = relative(FILE_UPLOADS_DIR, filePath);
//     if (relativePath.startsWith('..')) {
//       throw new Error('Invalid file path');
//     }

//     if (!existsSync(filePath)) {
//       throw new Error(`File to delete with name: ${filename} doesn't exist`);
//     }

//     try {
//       unlinkSync(filePath);
//     } catch (err: any) {
//       throw new Error(`Failed to delete file ${filename}: ${err.message}`);
//     }
//   }
// }

import { Injectable } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import sharp from 'sharp';
import { randomUUID } from 'crypto';
import { join } from 'path';

@Injectable()
export class S3ImagesService {
  private readonly s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({
      region: process.env.AWS_REGION || 'ru-1',
      endpoint: process.env.AWS_S3_ENDPOINT as string,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
      forcePathStyle: true,
    });
  }

  async uploadFile(
    file: Express.Multer.File,
    folder: string = 'dishes',
  ): Promise<string> {
    const resizedBuffer = await sharp(file.buffer)
      .resize(250, 250, { fit: 'cover' })
      .webp({ quality: 80 })
      .toBuffer();

    const ext = 'webp';
    const key = `${folder}/${randomUUID()}.${ext}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
      Body: resizedBuffer,
      ContentType: file.mimetype,
    });

    await this.s3Client.send(command);

    return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.timeweb.com/${key}`;
  }

  // Удаление файла из S3
  async deleteFile(imageUrl: string): Promise<void> {
    if (!imageUrl) return;

    // Извлекаем ключ из URL: https://bucket.s3.timeweb.com/dishes/123.jpg -> dishes/123.jpg
    const regex = new RegExp(
      `${process.env.AWS_S3_BUCKET_NAME}.s3.timeweb.com/`,
    );
    const key = imageUrl.replace(regex, '');

    const command = new DeleteObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
    });

    await this.s3Client.send(command);
  }
}
