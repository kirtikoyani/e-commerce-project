import { Router } from 'express';
import { cartRouter } from './cart.routes';
import { productRouter } from './product.routes';
import { userRouter } from './user.routes';

const router = Router();

router.use('/', userRouter);
router.use('/', productRouter);
router.use('/', cartRouter);

export { router };

