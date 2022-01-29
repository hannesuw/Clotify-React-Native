const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "emptyUsername":
      res.status(404).json({ message: "Username required" });
      break;

    case "emptyEmail":
      res.status(404).json({ message: "Email required" });
      break;

    case "emptyPassword":
      res.status(404).json({ message: "Password required" });
      break;

    case "emptyPhoneNumber":
      res.status(404).json({ message: "Phone Number required" });
      break;

    case "emptyAddress":
      res.status(404).json({ message: "Address required" });
      break;

    case "userNotFound":
      res.status(404).json({ message: "User not found" });
      break;

    default:
      res.status(500).json(err.message);
      break;
  }
};

module.exports = errorHandler;
