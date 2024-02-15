const joi = require("joi");

const schema = joi.object({
  name: joi.string().required(),

  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),

  email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com"] } }),

  isActive: joi.boolean().strict(),

  isBlocked: joi.boolean().strict(),

  roles: joi.array().items(joi.string().valid("admin", "user")).required(),

  dob: joi.date().min("1-1-2006"),
  //array of roles fixed [admin ,user],
  //dob:age greater than 18
  country: joi.string(),
});

const validate = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) next(error.details[0].message);
  next();
};

module.exports = { validate };
