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

const { Product, Likes, User, Basket, BasketItem, ProductSize, Order, OrderItem, Ads, PaymentIntent } = initSchema(schema);

export {
  Product,
  Likes,
  User,
  Basket,
  BasketItem,
  ProductSize,
  Order,
  OrderItem,
  Ads,
  OrderStatus,
  PaymentIntent
};