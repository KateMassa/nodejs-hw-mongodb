import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'any.required': 'Set name for contact',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'any.required': 'Set phone number for contact',
  }),
  email: Joi.string().email().min(3).max(20).optional(),
  isFavorite: Joi.boolean().default(false),
  contactType: Joi.string()
    .valid('work', 'personal', 'home')
    .default('personal'),
  createdAt: Joi.date().default(() => new Date(), 'current date'),
  updatedAt: Joi.date().default(() => new Date(), 'current date'),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string().email().min(3).max(20),
  isFavorite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'personal', 'home'),
});

// export const validationResult = createContactSchema.validate(userData, {
//   abortEarly: false,
// });
