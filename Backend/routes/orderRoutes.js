import express from 'express'
import { verifyRazorpay, placeOrder, placeOrderRazorpay, deleteOrder, placeOrderStripe, updateStatus, allOrders, userOrders, verifyStripe } from '../controllers/orderController.js'
import adminAuth from '../middlewares/admitAuth.js'
import authUser from '../middlewares/auth.js'


const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);
orderRouter.post('/remove', adminAuth, deleteOrder);

// Payment Features
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/razorpay', authUser, placeOrderRazorpay);

// User Feature
orderRouter.post('/userorders', authUser, userOrders);

// verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe);
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay);

export default orderRouter;