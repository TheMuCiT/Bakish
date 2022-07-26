import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum OrderStatus {
  NEW = "NEW",
  PREPARING = "PREPARING",
  READY = "READY",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED"
}

export declare class PaymentIntent {
  readonly clientSecret: string;
  constructor(init: ModelInit<PaymentIntent>);
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LikesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductSizeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BasketItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BasketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AdsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Product {
  readonly id: string;
  readonly title: string;
  readonly subTitle?: string | null;
  readonly description: string;
  readonly Likes?: (Likes | null)[] | null;
  readonly image: string;
  readonly rating: number;
  readonly ProductSizes?: ProductSize[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Likes {
  readonly id: string;
  readonly userID: string;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Likes, LikesMetaData>);
  static copyOf(source: Likes, mutator: (draft: MutableModel<Likes, LikesMetaData>) => MutableModel<Likes, LikesMetaData> | void): Likes;
}

export declare class ProductSize {
  readonly id: string;
  readonly size: number;
  readonly price: number;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProductSize, ProductSizeMetaData>);
  static copyOf(source: ProductSize, mutator: (draft: MutableModel<ProductSize, ProductSizeMetaData>) => MutableModel<ProductSize, ProductSizeMetaData> | void): ProductSize;
}

export declare class Order {
  readonly id: string;
  readonly userID: string;
  readonly total: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly OrderItems?: (OrderItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class OrderItem {
  readonly id: string;
  readonly quantity: number;
  readonly Product?: ProductSize | null;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderItemProductId?: string | null;
  constructor(init: ModelInit<OrderItem, OrderItemMetaData>);
  static copyOf(source: OrderItem, mutator: (draft: MutableModel<OrderItem, OrderItemMetaData>) => MutableModel<OrderItem, OrderItemMetaData> | void): OrderItem;
}

export declare class BasketItem {
  readonly id: string;
  readonly quantity: number;
  readonly Product: Product;
  readonly basketID: string;
  readonly size?: string | null;
  readonly ProductSize: ProductSize;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketItemProductId: string;
  readonly basketItemProductSizeId: string;
  constructor(init: ModelInit<BasketItem, BasketItemMetaData>);
  static copyOf(source: BasketItem, mutator: (draft: MutableModel<BasketItem, BasketItemMetaData>) => MutableModel<BasketItem, BasketItemMetaData> | void): BasketItem;
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly Basket?: Basket | null;
  readonly Likes?: (Likes | null)[] | null;
  readonly Orders?: (Order | null)[] | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userBasketId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Basket {
  readonly id: string;
  readonly BasketItems?: (BasketItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Basket, BasketMetaData>);
  static copyOf(source: Basket, mutator: (draft: MutableModel<Basket, BasketMetaData>) => MutableModel<Basket, BasketMetaData> | void): Basket;
}

export declare class Ads {
  readonly id: string;
  readonly title: string;
  readonly text: string;
  readonly date: string;
  readonly image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ads, AdsMetaData>);
  static copyOf(source: Ads, mutator: (draft: MutableModel<Ads, AdsMetaData>) => MutableModel<Ads, AdsMetaData> | void): Ads;
}