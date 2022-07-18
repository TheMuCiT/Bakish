/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrderItemInput = {
  id?: string | null,
  quantity: number,
  orderID: string,
  _version?: number | null,
  orderItemProductId?: string | null,
};

export type ModelOrderItemConditionInput = {
  quantity?: ModelIntInput | null,
  orderID?: ModelIDInput | null,
  and?: Array< ModelOrderItemConditionInput | null > | null,
  or?: Array< ModelOrderItemConditionInput | null > | null,
  not?: ModelOrderItemConditionInput | null,
  orderItemProductId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type OrderItem = {
  __typename: "OrderItem",
  id: string,
  quantity: number,
  Product?: Product | null,
  orderID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  orderItemProductId?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  title: string,
  subTitle?: string | null,
  description: string,
  size?: Array< string | null > | null,
  price: number,
  Likes?: ModelLikesConnection | null,
  image: string,
  rating: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelLikesConnection = {
  __typename: "ModelLikesConnection",
  items:  Array<Likes | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Likes = {
  __typename: "Likes",
  id: string,
  userID: string,
  productID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateOrderItemInput = {
  id: string,
  quantity?: number | null,
  orderID?: string | null,
  _version?: number | null,
  orderItemProductId?: string | null,
};

export type DeleteOrderItemInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrderInput = {
  id?: string | null,
  userID: string,
  total: number,
  status: OrderStatus,
  _version?: number | null,
};

export enum OrderStatus {
  NEW = "NEW",
  PREPARING = "PREPARING",
  READY = "READY",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED",
}


export type ModelOrderConditionInput = {
  userID?: ModelIDInput | null,
  total?: ModelFloatInput | null,
  status?: ModelOrderStatusInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null,
  ne?: OrderStatus | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  userID: string,
  total: number,
  status: OrderStatus,
  OrderItems?: ModelOrderItemConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelOrderItemConnection = {
  __typename: "ModelOrderItemConnection",
  items:  Array<OrderItem | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateOrderInput = {
  id: string,
  userID?: string | null,
  total?: number | null,
  status?: OrderStatus | null,
  _version?: number | null,
};

export type DeleteOrderInput = {
  id: string,
  _version?: number | null,
};

export type CreateLikesInput = {
  id?: string | null,
  userID: string,
  productID: string,
  _version?: number | null,
};

export type ModelLikesConditionInput = {
  userID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelLikesConditionInput | null > | null,
  or?: Array< ModelLikesConditionInput | null > | null,
  not?: ModelLikesConditionInput | null,
};

export type UpdateLikesInput = {
  id: string,
  userID?: string | null,
  productID?: string | null,
  _version?: number | null,
};

export type DeleteLikesInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductInput = {
  id?: string | null,
  title: string,
  subTitle?: string | null,
  description: string,
  size?: Array< string | null > | null,
  price: number,
  image: string,
  rating: number,
  _version?: number | null,
};

export type ModelProductConditionInput = {
  title?: ModelStringInput | null,
  subTitle?: ModelStringInput | null,
  description?: ModelStringInput | null,
  size?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  image?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateProductInput = {
  id: string,
  title?: string | null,
  subTitle?: string | null,
  description?: string | null,
  size?: Array< string | null > | null,
  price?: number | null,
  image?: string | null,
  rating?: number | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateBasketItemInput = {
  id?: string | null,
  quantity: number,
  basketID: string,
  _version?: number | null,
  basketItemProductId?: string | null,
};

export type ModelBasketItemConditionInput = {
  quantity?: ModelIntInput | null,
  basketID?: ModelIDInput | null,
  and?: Array< ModelBasketItemConditionInput | null > | null,
  or?: Array< ModelBasketItemConditionInput | null > | null,
  not?: ModelBasketItemConditionInput | null,
  basketItemProductId?: ModelIDInput | null,
};

export type BasketItem = {
  __typename: "BasketItem",
  id: string,
  quantity: number,
  Product?: Product | null,
  basketID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  basketItemProductId?: string | null,
};

export type UpdateBasketItemInput = {
  id: string,
  quantity?: number | null,
  basketID?: string | null,
  _version?: number | null,
  basketItemProductId?: string | null,
};

export type DeleteBasketItemInput = {
  id: string,
  _version?: number | null,
};

export type CreateBasketInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelBasketConditionInput = {
  and?: Array< ModelBasketConditionInput | null > | null,
  or?: Array< ModelBasketConditionInput | null > | null,
  not?: ModelBasketConditionInput | null,
};

export type Basket = {
  __typename: "Basket",
  id: string,
  BasketItems?: ModelBasketItemConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelBasketItemConnection = {
  __typename: "ModelBasketItemConnection",
  items:  Array<BasketItem | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateBasketInput = {
  id: string,
  _version?: number | null,
};

export type DeleteBasketInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  image?: string | null,
  _version?: number | null,
  userBasketId?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userBasketId?: ModelIDInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  Basket?: Basket | null,
  Likes?: ModelLikesConnection | null,
  Orders?: ModelOrderConnection | null,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userBasketId?: string | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  image?: string | null,
  _version?: number | null,
  userBasketId?: string | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateAdsInput = {
  id?: string | null,
  title: string,
  text: string,
  date: string,
  image: string,
  _version?: number | null,
};

export type ModelAdsConditionInput = {
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  date?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelAdsConditionInput | null > | null,
  or?: Array< ModelAdsConditionInput | null > | null,
  not?: ModelAdsConditionInput | null,
};

export type Ads = {
  __typename: "Ads",
  id: string,
  title: string,
  text: string,
  date: string,
  image: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAdsInput = {
  id: string,
  title?: string | null,
  text?: string | null,
  date?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type DeleteAdsInput = {
  id: string,
  _version?: number | null,
};

export type ModelOrderItemFilterInput = {
  id?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  orderID?: ModelIDInput | null,
  and?: Array< ModelOrderItemFilterInput | null > | null,
  or?: Array< ModelOrderItemFilterInput | null > | null,
  not?: ModelOrderItemFilterInput | null,
  orderItemProductId?: ModelIDInput | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  total?: ModelFloatInput | null,
  status?: ModelOrderStatusInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelLikesFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelLikesFilterInput | null > | null,
  or?: Array< ModelLikesFilterInput | null > | null,
  not?: ModelLikesFilterInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  subTitle?: ModelStringInput | null,
  description?: ModelStringInput | null,
  size?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  image?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBasketItemFilterInput = {
  id?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  basketID?: ModelIDInput | null,
  and?: Array< ModelBasketItemFilterInput | null > | null,
  or?: Array< ModelBasketItemFilterInput | null > | null,
  not?: ModelBasketItemFilterInput | null,
  basketItemProductId?: ModelIDInput | null,
};

export type ModelBasketFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelBasketFilterInput | null > | null,
  or?: Array< ModelBasketFilterInput | null > | null,
  not?: ModelBasketFilterInput | null,
};

export type ModelBasketConnection = {
  __typename: "ModelBasketConnection",
  items:  Array<Basket | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userBasketId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAdsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  date?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelAdsFilterInput | null > | null,
  or?: Array< ModelAdsFilterInput | null > | null,
  not?: ModelAdsFilterInput | null,
};

export type ModelAdsConnection = {
  __typename: "ModelAdsConnection",
  items:  Array<Ads | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateOrderItemMutationVariables = {
  input: CreateOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type CreateOrderItemMutation = {
  createOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    quantity: number,
    Product?:  {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderItemProductId?: string | null,
  } | null,
};

export type UpdateOrderItemMutationVariables = {
  input: UpdateOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type UpdateOrderItemMutation = {
  updateOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    quantity: number,
    Product?:  {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderItemProductId?: string | null,
  } | null,
};

export type DeleteOrderItemMutationVariables = {
  input: DeleteOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type DeleteOrderItemMutation = {
  deleteOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    quantity: number,
    Product?:  {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderItemProductId?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    total: number,
    status: OrderStatus,
    OrderItems?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    total: number,
    status: OrderStatus,
    OrderItems?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    total: number,
    status: OrderStatus,
    OrderItems?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateLikesMutationVariables = {
  input: CreateLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type CreateLikesMutation = {
  createLikes?:  {
    __typename: "Likes",
    id: string,
    userID: string,
    productID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateLikesMutationVariables = {
  input: UpdateLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type UpdateLikesMutation = {
  updateLikes?:  {
    __typename: "Likes",
    id: string,
    userID: string,
    productID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteLikesMutationVariables = {
  input: DeleteLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type DeleteLikesMutation = {
  deleteLikes?:  {
    __typename: "Likes",
    id: string,
    userID: string,
    productID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    subTitle?: string | null,
    description: string,
    size?: Array< string | null > | null,
    price: number,
    Likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    image: string,
    rating: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    subTitle?: string | null,
    description: string,
    size?: Array< string | null > | null,
    price: number,
    Likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    image: string,
    rating: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    subTitle?: string | null,
    description: string,
    size?: Array< string | null > | null,
    price: number,
    Likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    image: string,
    rating: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBasketItemMutationVariables = {
  input: CreateBasketItemInput,
  condition?: ModelBasketItemConditionInput | null,
};

export type CreateBasketItemMutation = {
  createBasketItem?:  {
    __typename: "BasketItem",
    id: string,
    quantity: number,
    Product?:  {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    basketID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    basketItemProductId?: string | null,
  } | null,
};

export type UpdateBasketItemMutationVariables = {
  input: UpdateBasketItemInput,
  condition?: ModelBasketItemConditionInput | null,
};

export type UpdateBasketItemMutation = {
  updateBasketItem?:  {
    __typename: "BasketItem",
    id: string,
    quantity: number,
    Product?:  {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    basketID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    basketItemProductId?: string | null,
  } | null,
};

export type DeleteBasketItemMutationVariables = {
  input: DeleteBasketItemInput,
  condition?: ModelBasketItemConditionInput | null,
};

export type DeleteBasketItemMutation = {
  deleteBasketItem?:  {
    __typename: "BasketItem",
    id: string,
    quantity: number,
    Product?:  {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    basketID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    basketItemProductId?: string | null,
  } | null,
};

export type CreateBasketMutationVariables = {
  input: CreateBasketInput,
  condition?: ModelBasketConditionInput | null,
};

export type CreateBasketMutation = {
  createBasket?:  {
    __typename: "Basket",
    id: string,
    BasketItems?:  {
      __typename: "ModelBasketItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBasketMutationVariables = {
  input: UpdateBasketInput,
  condition?: ModelBasketConditionInput | null,
};

export type UpdateBasketMutation = {
  updateBasket?:  {
    __typename: "Basket",
    id: string,
    BasketItems?:  {
      __typename: "ModelBasketItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBasketMutationVariables = {
  input: DeleteBasketInput,
  condition?: ModelBasketConditionInput | null,
};

export type DeleteBasketMutation = {
  deleteBasket?:  {
    __typename: "Basket",
    id: string,
    BasketItems?:  {
      __typename: "ModelBasketItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    Basket?:  {
      __typename: "Basket",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userBasketId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    Basket?:  {
      __typename: "Basket",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userBasketId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    Basket?:  {
      __typename: "Basket",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userBasketId?: string | null,
  } | null,
};

export type CreateAdsMutationVariables = {
  input: CreateAdsInput,
  condition?: ModelAdsConditionInput | null,
};

export type CreateAdsMutation = {
  createAds?:  {
    __typename: "Ads",
    id: string,
    title: string,
    text: string,
    date: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAdsMutationVariables = {
  input: UpdateAdsInput,
  condition?: ModelAdsConditionInput | null,
};

export type UpdateAdsMutation = {
  updateAds?:  {
    __typename: "Ads",
    id: string,
    title: string,
    text: string,
    date: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAdsMutationVariables = {
  input: DeleteAdsInput,
  condition?: ModelAdsConditionInput | null,
};

export type DeleteAdsMutation = {
  deleteAds?:  {
    __typename: "Ads",
    id: string,
    title: string,
    text: string,
    date: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetOrderItemQueryVariables = {
  id: string,
};

export type GetOrderItemQuery = {
  getOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    quantity: number,
    Product?:  {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderItemProductId?: string | null,
  } | null,
};

export type ListOrderItemsQueryVariables = {
  filter?: ModelOrderItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderItemsQuery = {
  listOrderItems?:  {
    __typename: "ModelOrderItemConnection",
    items:  Array< {
      __typename: "OrderItem",
      id: string,
      quantity: number,
      orderID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderItemProductId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrderItemsQueryVariables = {
  filter?: ModelOrderItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrderItemsQuery = {
  syncOrderItems?:  {
    __typename: "ModelOrderItemConnection",
    items:  Array< {
      __typename: "OrderItem",
      id: string,
      quantity: number,
      orderID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderItemProductId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    total: number,
    status: OrderStatus,
    OrderItems?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      userID: string,
      total: number,
      status: OrderStatus,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrdersQuery = {
  syncOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      userID: string,
      total: number,
      status: OrderStatus,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLikesQueryVariables = {
  id: string,
};

export type GetLikesQuery = {
  getLikes?:  {
    __typename: "Likes",
    id: string,
    userID: string,
    productID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikesConnection",
    items:  Array< {
      __typename: "Likes",
      id: string,
      userID: string,
      productID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLikesQueryVariables = {
  filter?: ModelLikesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLikesQuery = {
  syncLikes?:  {
    __typename: "ModelLikesConnection",
    items:  Array< {
      __typename: "Likes",
      id: string,
      userID: string,
      productID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    subTitle?: string | null,
    description: string,
    size?: Array< string | null > | null,
    price: number,
    Likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    image: string,
    rating: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBasketItemQueryVariables = {
  id: string,
};

export type GetBasketItemQuery = {
  getBasketItem?:  {
    __typename: "BasketItem",
    id: string,
    quantity: number,
    Product?:  {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    basketID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    basketItemProductId?: string | null,
  } | null,
};

export type ListBasketItemsQueryVariables = {
  filter?: ModelBasketItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBasketItemsQuery = {
  listBasketItems?:  {
    __typename: "ModelBasketItemConnection",
    items:  Array< {
      __typename: "BasketItem",
      id: string,
      quantity: number,
      basketID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      basketItemProductId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBasketItemsQueryVariables = {
  filter?: ModelBasketItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBasketItemsQuery = {
  syncBasketItems?:  {
    __typename: "ModelBasketItemConnection",
    items:  Array< {
      __typename: "BasketItem",
      id: string,
      quantity: number,
      basketID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      basketItemProductId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBasketQueryVariables = {
  id: string,
};

export type GetBasketQuery = {
  getBasket?:  {
    __typename: "Basket",
    id: string,
    BasketItems?:  {
      __typename: "ModelBasketItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBasketsQueryVariables = {
  filter?: ModelBasketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBasketsQuery = {
  listBaskets?:  {
    __typename: "ModelBasketConnection",
    items:  Array< {
      __typename: "Basket",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBasketsQueryVariables = {
  filter?: ModelBasketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBasketsQuery = {
  syncBaskets?:  {
    __typename: "ModelBasketConnection",
    items:  Array< {
      __typename: "Basket",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    Basket?:  {
      __typename: "Basket",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userBasketId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userBasketId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userBasketId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAdsQueryVariables = {
  id: string,
};

export type GetAdsQuery = {
  getAds?:  {
    __typename: "Ads",
    id: string,
    title: string,
    text: string,
    date: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAdsQueryVariables = {
  filter?: ModelAdsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdsQuery = {
  listAds?:  {
    __typename: "ModelAdsConnection",
    items:  Array< {
      __typename: "Ads",
      id: string,
      title: string,
      text: string,
      date: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAdsQueryVariables = {
  filter?: ModelAdsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAdsQuery = {
  syncAds?:  {
    __typename: "ModelAdsConnection",
    items:  Array< {
      __typename: "Ads",
      id: string,
      title: string,
      text: string,
      date: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateOrderItemSubscription = {
  onCreateOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    quantity: number,
    Product?:  {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderItemProductId?: string | null,
  } | null,
};

export type OnUpdateOrderItemSubscription = {
  onUpdateOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    quantity: number,
    Product?:  {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderItemProductId?: string | null,
  } | null,
};

export type OnDeleteOrderItemSubscription = {
  onDeleteOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    quantity: number,
    Product?:  {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    orderID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderItemProductId?: string | null,
  } | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    total: number,
    status: OrderStatus,
    OrderItems?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    total: number,
    status: OrderStatus,
    OrderItems?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    userID: string,
    total: number,
    status: OrderStatus,
    OrderItems?:  {
      __typename: "ModelOrderItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateLikesSubscription = {
  onCreateLikes?:  {
    __typename: "Likes",
    id: string,
    userID: string,
    productID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateLikesSubscription = {
  onUpdateLikes?:  {
    __typename: "Likes",
    id: string,
    userID: string,
    productID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteLikesSubscription = {
  onDeleteLikes?:  {
    __typename: "Likes",
    id: string,
    userID: string,
    productID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    subTitle?: string | null,
    description: string,
    size?: Array< string | null > | null,
    price: number,
    Likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    image: string,
    rating: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    subTitle?: string | null,
    description: string,
    size?: Array< string | null > | null,
    price: number,
    Likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    image: string,
    rating: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    subTitle?: string | null,
    description: string,
    size?: Array< string | null > | null,
    price: number,
    Likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    image: string,
    rating: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBasketItemSubscription = {
  onCreateBasketItem?:  {
    __typename: "BasketItem",
    id: string,
    quantity: number,
    Product?:  {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    basketID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    basketItemProductId?: string | null,
  } | null,
};

export type OnUpdateBasketItemSubscription = {
  onUpdateBasketItem?:  {
    __typename: "BasketItem",
    id: string,
    quantity: number,
    Product?:  {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    basketID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    basketItemProductId?: string | null,
  } | null,
};

export type OnDeleteBasketItemSubscription = {
  onDeleteBasketItem?:  {
    __typename: "BasketItem",
    id: string,
    quantity: number,
    Product?:  {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      description: string,
      size?: Array< string | null > | null,
      price: number,
      image: string,
      rating: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    basketID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    basketItemProductId?: string | null,
  } | null,
};

export type OnCreateBasketSubscription = {
  onCreateBasket?:  {
    __typename: "Basket",
    id: string,
    BasketItems?:  {
      __typename: "ModelBasketItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBasketSubscription = {
  onUpdateBasket?:  {
    __typename: "Basket",
    id: string,
    BasketItems?:  {
      __typename: "ModelBasketItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBasketSubscription = {
  onDeleteBasket?:  {
    __typename: "Basket",
    id: string,
    BasketItems?:  {
      __typename: "ModelBasketItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    Basket?:  {
      __typename: "Basket",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userBasketId?: string | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    Basket?:  {
      __typename: "Basket",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userBasketId?: string | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    Basket?:  {
      __typename: "Basket",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Likes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userBasketId?: string | null,
  } | null,
};

export type OnCreateAdsSubscription = {
  onCreateAds?:  {
    __typename: "Ads",
    id: string,
    title: string,
    text: string,
    date: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAdsSubscription = {
  onUpdateAds?:  {
    __typename: "Ads",
    id: string,
    title: string,
    text: string,
    date: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAdsSubscription = {
  onDeleteAds?:  {
    __typename: "Ads",
    id: string,
    title: string,
    text: string,
    date: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
