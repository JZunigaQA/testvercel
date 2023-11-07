const Joi = require('joi');

const id = Joi.string().uuid();
const user = Joi.string().alphanum().min(3).max(15);
const email = Joi.string().alphanum().min(10);

const createUsersSchema = Joi.object({
  user: user.required(),
  email: email.required(),
});

const updateUsersSchema = Joi.object({
  user: user,
  email: email,
});

const getUsersSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUsersSchema, updateUsersSchema, getUsersSchema }
