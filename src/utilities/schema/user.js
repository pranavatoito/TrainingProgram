import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  dob: Joi.any().required(),
  active: Joi.boolean().required(),
});
export default userSchema;
