/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      title
      subTitle
      description
      Likes {
        items {
          id
          userID
          productID
          User {
            id
            username
            email
            image
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userBasketId
          }
          Product {
            id
            title
            subTitle
            description
            image
            rating
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      image
      rating
      ProductSizes {
        items {
          id
          size
          price
          productID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      title
      subTitle
      description
      Likes {
        items {
          id
          userID
          productID
          User {
            id
            username
            email
            image
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userBasketId
          }
          Product {
            id
            title
            subTitle
            description
            image
            rating
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      image
      rating
      ProductSizes {
        items {
          id
          size
          price
          productID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      title
      subTitle
      description
      Likes {
        items {
          id
          userID
          productID
          User {
            id
            username
            email
            image
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userBasketId
          }
          Product {
            id
            title
            subTitle
            description
            image
            rating
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      image
      rating
      ProductSizes {
        items {
          id
          size
          price
          productID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProductSize = /* GraphQL */ `
  subscription OnCreateProductSize {
    onCreateProductSize {
      id
      size
      price
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProductSize = /* GraphQL */ `
  subscription OnUpdateProductSize {
    onUpdateProductSize {
      id
      size
      price
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProductSize = /* GraphQL */ `
  subscription OnDeleteProductSize {
    onDeleteProductSize {
      id
      size
      price
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      userID
      total
      status
      OrderItems {
        items {
          id
          quantity
          Product {
            id
            title
            subTitle
            description
            image
            rating
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          orderID
          ProductSize {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderItemProductId
          orderItemProductSizeId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      userID
      total
      status
      OrderItems {
        items {
          id
          quantity
          Product {
            id
            title
            subTitle
            description
            image
            rating
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          orderID
          ProductSize {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderItemProductId
          orderItemProductSizeId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      userID
      total
      status
      OrderItems {
        items {
          id
          quantity
          Product {
            id
            title
            subTitle
            description
            image
            rating
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          orderID
          ProductSize {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderItemProductId
          orderItemProductSizeId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateLikes = /* GraphQL */ `
  subscription OnCreateLikes {
    onCreateLikes {
      id
      userID
      productID
      User {
        id
        username
        email
        Basket {
          id
          name
          BasketItems {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Likes {
          items {
            id
            userID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Orders {
          items {
            id
            userID
            total
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBasketId
      }
      Product {
        id
        title
        subTitle
        description
        Likes {
          items {
            id
            userID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        image
        rating
        ProductSizes {
          items {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLikes = /* GraphQL */ `
  subscription OnUpdateLikes {
    onUpdateLikes {
      id
      userID
      productID
      User {
        id
        username
        email
        Basket {
          id
          name
          BasketItems {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Likes {
          items {
            id
            userID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Orders {
          items {
            id
            userID
            total
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBasketId
      }
      Product {
        id
        title
        subTitle
        description
        Likes {
          items {
            id
            userID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        image
        rating
        ProductSizes {
          items {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLikes = /* GraphQL */ `
  subscription OnDeleteLikes {
    onDeleteLikes {
      id
      userID
      productID
      User {
        id
        username
        email
        Basket {
          id
          name
          BasketItems {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Likes {
          items {
            id
            userID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Orders {
          items {
            id
            userID
            total
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userBasketId
      }
      Product {
        id
        title
        subTitle
        description
        Likes {
          items {
            id
            userID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        image
        rating
        ProductSizes {
          items {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem {
    onCreateOrderItem {
      id
      quantity
      Product {
        id
        title
        subTitle
        description
        Likes {
          items {
            id
            userID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        image
        rating
        ProductSizes {
          items {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      ProductSize {
        id
        size
        price
        productID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderItemProductId
      orderItemProductSizeId
    }
  }
`;
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem {
    onUpdateOrderItem {
      id
      quantity
      Product {
        id
        title
        subTitle
        description
        Likes {
          items {
            id
            userID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        image
        rating
        ProductSizes {
          items {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      ProductSize {
        id
        size
        price
        productID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderItemProductId
      orderItemProductSizeId
    }
  }
`;
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem {
    onDeleteOrderItem {
      id
      quantity
      Product {
        id
        title
        subTitle
        description
        Likes {
          items {
            id
            userID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        image
        rating
        ProductSizes {
          items {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      ProductSize {
        id
        size
        price
        productID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderItemProductId
      orderItemProductSizeId
    }
  }
`;
export const onCreateBasketItem = /* GraphQL */ `
  subscription OnCreateBasketItem {
    onCreateBasketItem {
      id
      quantity
      Product {
        id
        title
        subTitle
        description
        Likes {
          items {
            id
            userID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        image
        rating
        ProductSizes {
          items {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      basketID
      ProductSize {
        id
        size
        price
        productID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketItemProductId
      basketItemProductSizeId
    }
  }
`;
export const onUpdateBasketItem = /* GraphQL */ `
  subscription OnUpdateBasketItem {
    onUpdateBasketItem {
      id
      quantity
      Product {
        id
        title
        subTitle
        description
        Likes {
          items {
            id
            userID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        image
        rating
        ProductSizes {
          items {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      basketID
      ProductSize {
        id
        size
        price
        productID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketItemProductId
      basketItemProductSizeId
    }
  }
`;
export const onDeleteBasketItem = /* GraphQL */ `
  subscription OnDeleteBasketItem {
    onDeleteBasketItem {
      id
      quantity
      Product {
        id
        title
        subTitle
        description
        Likes {
          items {
            id
            userID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        image
        rating
        ProductSizes {
          items {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      basketID
      ProductSize {
        id
        size
        price
        productID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketItemProductId
      basketItemProductSizeId
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      Basket {
        id
        name
        BasketItems {
          items {
            id
            quantity
            basketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            basketItemProductId
            basketItemProductSizeId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Likes {
        items {
          id
          userID
          productID
          User {
            id
            username
            email
            image
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userBasketId
          }
          Product {
            id
            title
            subTitle
            description
            image
            rating
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Orders {
        items {
          id
          userID
          total
          status
          OrderItems {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userBasketId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      Basket {
        id
        name
        BasketItems {
          items {
            id
            quantity
            basketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            basketItemProductId
            basketItemProductSizeId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Likes {
        items {
          id
          userID
          productID
          User {
            id
            username
            email
            image
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userBasketId
          }
          Product {
            id
            title
            subTitle
            description
            image
            rating
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Orders {
        items {
          id
          userID
          total
          status
          OrderItems {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userBasketId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      Basket {
        id
        name
        BasketItems {
          items {
            id
            quantity
            basketID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            basketItemProductId
            basketItemProductSizeId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Likes {
        items {
          id
          userID
          productID
          User {
            id
            username
            email
            image
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userBasketId
          }
          Product {
            id
            title
            subTitle
            description
            image
            rating
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Orders {
        items {
          id
          userID
          total
          status
          OrderItems {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userBasketId
    }
  }
`;
export const onCreateBasket = /* GraphQL */ `
  subscription OnCreateBasket {
    onCreateBasket {
      id
      name
      BasketItems {
        items {
          id
          quantity
          Product {
            id
            title
            subTitle
            description
            image
            rating
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          basketID
          ProductSize {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          basketItemProductId
          basketItemProductSizeId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBasket = /* GraphQL */ `
  subscription OnUpdateBasket {
    onUpdateBasket {
      id
      name
      BasketItems {
        items {
          id
          quantity
          Product {
            id
            title
            subTitle
            description
            image
            rating
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          basketID
          ProductSize {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          basketItemProductId
          basketItemProductSizeId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBasket = /* GraphQL */ `
  subscription OnDeleteBasket {
    onDeleteBasket {
      id
      name
      BasketItems {
        items {
          id
          quantity
          Product {
            id
            title
            subTitle
            description
            image
            rating
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          basketID
          ProductSize {
            id
            size
            price
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          basketItemProductId
          basketItemProductSizeId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateAds = /* GraphQL */ `
  subscription OnCreateAds {
    onCreateAds {
      id
      title
      text
      date
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateAds = /* GraphQL */ `
  subscription OnUpdateAds {
    onUpdateAds {
      id
      title
      text
      date
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteAds = /* GraphQL */ `
  subscription OnDeleteAds {
    onDeleteAds {
      id
      title
      text
      date
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
