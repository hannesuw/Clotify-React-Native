const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongoConnection");
const { encryptPassword } = require("../helpers/bcrypt");

class User {
  static users() {
    const db = getDatabase();
    return db.collection("users");
  }

  static findAll() {
    return this.users().find({}).toArray();
  }

  static findById(id) {
    return this.users().findOne({ _id: ObjectId(id) });
  }

  static create(data) {
    const { username, email, password, phoneNumber, address } = data;
    if (!username) throw { name: "emptyUsername" };
    if (!email) throw { name: "emptyEmail" };
    if (!password) throw { name: "emptyPassword" };
    if (!phoneNumber) throw { name: "emptyPhoneNumber" };
    if (!address) throw { name: "emptyAddress" };

    data.password = encryptPassword(password);
    return this.users().insertOne(data);
  }

  static deleteById(id) {
    return this.users().deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = User;
