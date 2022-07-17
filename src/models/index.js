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

const { OrderItem, Product, Likes, Order, BasketItem, Basket, User, Ads } = initSchema(schema);

export {
  OrderItem,
  Product,
  Likes,
  Order,
  BasketItem,
  Basket,
  User,
  Ads,
  OrderStatus
};