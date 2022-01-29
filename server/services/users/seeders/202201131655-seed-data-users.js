const { run, getDatabase } = require("../config/mongoConnection");

const users = [
  {
    id: 2,
    email: "wijaya@mail.com",
    password: "$2a$10$VdJWk.WuvPJrKEuwFLbOCei6kWt2Z9uVkr/vcQ/xL2YxY1vf4wrkO",
    role: "admin",
    phoneNumber: "08557628291",
    address: "Jl. Indonesia Raya no. 20",
    createdAt: "2022-01-06T14:36:10.550Z",
    updatedAt: "2022-01-06T14:36:10.550Z",
  },
  {
    id: 3,
    email: "kusuma@mail.com",
    password: "$2a$10$t962/S.RvSquQL0C0aHnL./i7jYHiSDDYRMe3BDQgvF4cYDwYH/6S",
    role: "admin",
    phoneNumber: "087899768821",
    address: "Jl. Bandung Raya no. 20",
    createdAt: "2022-01-06T14:36:10.626Z",
    updatedAt: "2022-01-06T14:36:10.626Z",
  },
  {
    id: 7,
    email: "abcd@mail.com",
    password: "$2a$10$stB.DsCqgBcGrJzv8hxxx.Ad0Fr4cGJzwVv16ESxiYk4lP60lfgwS",
    role: "admin",
    phoneNumber: "081192011",
    address: "Jakarta",
    createdAt: "2022-01-08T11:44:39.262Z",
    updatedAt: "2022-01-08T11:44:39.262Z",
  },
  {
    id: 11,
    email: "abcde@mail.com",
    password: "$2a$10$otK0cwpDCKsTq97aJ1kDvefwNfml0sSmog.1tICr94xWpt3a6TfsG",
    role: "admin",
    phoneNumber: "081192011",
    address: "Jakarta",
    createdAt: "2022-01-08T11:51:03.703Z",
    updatedAt: "2022-01-08T11:51:03.703Z",
  },
  {
    id: 12,
    email: "test@mail.com",
    password: "$2a$10$kMf57R9fAm01pmxj5HZK7.qV7Q0nlngRfTarvCXn6KBJu46LiPIWK",
    role: "admin",
    phoneNumber: "089971918",
    address: "jakarta",
    createdAt: "2022-01-08T11:51:54.125Z",
    updatedAt: "2022-01-08T11:51:54.125Z",
  },
  {
    id: 13,
    email: "jojo@mail.com",
    password: "$2a$10$F26.hX7FldLMESQFnzOOW.SjO0yuwhUYR.zRWWfPUIrI1YSjzEjkO",
    role: "admin",
    phoneNumber: "08991810",
    address: "jakarta",
    createdAt: "2022-01-08T17:49:58.621Z",
    updatedAt: "2022-01-08T17:49:58.621Z",
  },
  {
    id: 1,
    email: "johannes@gmail.com",
    password: "$2a$10$nwszOvuWyBAvCsxIIwfz4OIovNxlQKM8Sjl2xI3LU/ZU66RybeI2q",
    role: "admin",
    phoneNumber: "08998676093",
    address: "Jl. Jakarta Raya no. 20",
    createdAt: "2022-01-06T14:36:10.445Z",
    updatedAt: "2022-01-06T14:36:10.445Z",
  },
];

run()
  .then(async () => {
    const db = getDatabase();
    const userCollection = db.collection("users");
    const result = await userCollection.insertMany(users);

    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
