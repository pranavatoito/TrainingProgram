import Joi from "joi";

const loginSchema = Joi.object({
  fullName: Joi.string().min(3).max(20).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});
export default loginSchema;
