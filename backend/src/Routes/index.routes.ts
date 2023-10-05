import { Router } from 'express';
import { productRouter } from './product.routes';
import { userRouter } from './user.routes';

const router = Router();

router.use('/', userRouter);
router.use('/', productRouter);

export { router };

