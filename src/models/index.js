// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "PREPARING": "PREPARING",
  "READY": "READY",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED"
};

const { Product, Likes, ProductSize, Order, OrderItem, BasketItem, User, Basket, Ads, PaymentIntent } = initSchema(schema);

export {
  Product,
  Likes,
  ProductSize,
  Order,
  OrderItem,
  BasketItem,
  User,
  Basket,
  Ads,
  OrderStatus,
  PaymentIntent
};