import * as multer from 'multer';
// import { randomUUID } from 'crypto';
// import * as path from 'path';
// import { FILE_UPLOADS_DIR } from 'src/constants';

// export const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, FILE_UPLOADS_DIR);
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname).toLowerCase();
//     cb(null, `${randomUUID()}${ext}`);
//   },
// });

export const storage = multer.memoryStorage();
