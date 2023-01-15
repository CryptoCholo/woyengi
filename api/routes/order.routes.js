import express from 'express';
import * as orderHandler from  '../controllers/order.controller.js';
// import orderValidator from '../validators/order.validator.js';

const router = express.Router();

router.get('/', orderHandler.getOrders)
router.get('/:orderId', orderHandler.getOrder)
router.post('/',  orderHandler.createOrder);
router.put('/:orderId', orderHandler.updateOrder);
router.delete('/:orderId', orderHandler.deleteOrder);

export default router;