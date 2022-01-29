require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");
const { appApi, usersApi } = require("./apis");
const Redis = require("ioredis");
const redis = new Redis({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_DB_PASSWORD,
});
const PORT = process.env.PORT || 4000;

const typeDefs = gql`
  type Product {
    id: ID
    name: String
    description: String
    price: Int
    mainImg: String
    categoryId: Int
    userMongoId: String
    Category: Category
    creator: String
  }

  input ProductInput {
    name: String!
    price: Int!
    description: String!
    mainImg: String!
    image1: String
    image2: String
    image3: String
    categoryId: Int!
  }

  type Category {
    id: ID
    name: String
  }

  type Image {
    id: ID
    imgUrl: String
    productID: Int
  }

  type User {
    _id: String
    username: String
    email: String
    password: String
    role: String
    phoneNumber: String
    address: String
  }

  input CreateUser {
    username: String
    email: String
    password: String
    phoneNumber: String
    address: String
  }

  type Query {
    products: [Product]
    product(productId: ID): Product
    categories: [Category]
    category(id: ID): Category
    users: [User]
    user(user_Id: String): User
    productImages(id: ID): [Image]
  }

  type Mutation {
    addUser(newUser: CreateUser): User
    deleteUser(user_Id: String): User
    addCategory(category: String): Category
    deleteCategory(id: ID): Category
    addProduct(newProduct: ProductInput): Product
    deleteProduct(id: ID): Product
  }
`;

const resolvers = {
  Query: {
    products: async () => {
      try {
        const productsCache = await redis.get("products");
        if (productsCache) {
          const products = JSON.parse(productsCache);

          return products;
        } else {
          const { data: products } = await appApi.get("/products");
          await redis.set("products", JSON.stringify(products));

          return products;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    product: async (_, args) => {
      try {
        console.log(args);
        const { data: product } = await appApi.get(
          `/products/${args.productId}`
        );

        const { data: user } = await usersApi.get(
          `/users/${product.userMongoId}`
        );

        return { ...product, creator: user.email };
      } catch (err) {
        console.log(err.response);
      }
    },
    categories: async () => {
      try {
        const categoriesCache = await redis.get("categories");

        if (categoriesCache) {
          const categories = JSON.parse(categoriesCache);

          return categories;
        } else {
          const { data: categories } = await appApi.get("/categories");
          await redis.set("categories", JSON.stringify(categories));

          return categories;
        }
      } catch (err) {
        console.log(err);
      }
    },
    category: async (_, args) => {
      try {
        const { data: category } = await appApi.get(`/categories/${args.id}`);
        return category;
      } catch (err) {
        console.log(err);
      }
    },
    users: async () => {
      try {
        const usersCache = await redis.get("users");

        if (usersCache) {
          const users = JSON.parse(usersCache);

          return users;
        } else {
          const { data: users } = await usersApi.get("/users");
          await redis.set("users", JSON.stringify(users));

          return users;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    user: async (_, args) => {
      try {
        const { data: user } = await usersApi.get(`/users/${args.user_Id}`);

        return user;
      } catch (err) {
        console.log(err.response);
      }
    },
    productImages: async (_, args) => {
      try {
        const { id } = args;
        const { data: images } = await appApi.get(`/products/images/${id}`);

        return images;
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      try {
        const { newUser } = args;
        const role = "customer";
        const data = {
          ...newUser,
          role,
        };

        const { data: user } = await usersApi.post("/users/register", data);
        await redis.del("users");

        return user;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
    deleteUser: async (_, args) => {
      try {
        const { data: user } = await usersApi.delete(`/users/${args.user_Id}`);
        await redis.del("users");

        return user;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
    addCategory: async (_, args) => {
      try {
        const { category } = args;
        const data = { category };

        const { data: createCategory } = await appApi.post("/categories", data);
        await redis.del("categories");

        return createCategory;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
    deleteCategory: async (_, args) => {
      try {
        const { id } = args;
        const { data: deleteCategory } = await appApi.delete(
          `/categories/${id}`
        );

        return deleteCategory;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
    addProduct: async (_, args) => {
      try {
        const { newProduct: data } = args;

        data.userMongoId = "61e5217e2a4dbc3d7e768296";

        const { data: product } = await appApi.post("/products", data);
        await redis.del("products");

        return product;
      } catch (err) {
        console.log(err.response.data);
      }
    },
    deleteProduct: async (_, args) => {
      try {
        const { id } = args;

        const { data: deleteProduct } = await appApi.delete(`/products/${id}`);
        redis.del("products");

        console.log(deleteProduct);

        return deleteProduct;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
