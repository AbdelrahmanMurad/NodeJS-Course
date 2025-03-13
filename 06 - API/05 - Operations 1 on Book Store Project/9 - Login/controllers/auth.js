const { User, Reviewer } = require("../models");
const createHttpError = require("http-errors");

const signup = async (req, res, next) => {
  const userData = req.body;

  const vali = User.validate(userData);
  if (vali.error) {
    return next(createHttpError(400, vali.error.message));
  }
  //if error => stop
  const user = new User(userData);

  try {
    const result = await user.isExist();
    if (result.check) {
      // next(createHttpError(409, result.message)) // you need to use return keyword
      return next(createHttpError(409, result.message));
    }
  } catch (error) {
    return next(createHttpError(500, error.message));
  }

  user.save((status) => {
    if (status.status) {
      //fetch _user_id to make a user reviewer.
      const _user_id = status._user_id;
      const reviewer = new Reviewer({
        name: userData.name,
        _user_id: _user_id,
      });
      reviewer.save((result) => {
        if (result.status) {
          res.status(201).json({
            status: true,
            message: "user has been created successfully",
          });
        } else {
          return next(
            createHttpError(500, "user has been created but reviewer has not")
          );
        }
      });
    } else {
      return next(createHttpError(500, status.message));
    }
  });
};

const login = async (req, res, next) => {
  User.login(req.body)
    .then((result) => {
      if (result.status) {
        res.status(200).json(result.data);
      }
      return next(createHttpError(result.code, result.message));
    })
    .catch((err) => {
      next(createHttpError(500, err.message));
    });
};

module.exports = {
  signup,
  login,
};
