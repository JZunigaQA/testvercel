const Joi = require('joi');

const id = Joi.string().uuid();
const user = Joi.string().alphanum().min(2).max(30);
const website = Joi.string().alphanum.min(8).max(60);

const createCategoriesSchema = Joi.object({
  user: user.required(),
  website: website.required(),
});

const updateCategoriesSchema = Joi.object({
  user: user,
  website: website,
});

const getCategoriesSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategoriesSchema, updateCategoriesSchema, getCategoriesSchema }