const Joi=require('joi');
exports.UserSchema=Joi.object({
    firstName:Joi.string().min(2).max(255).required(),
    lastName:Joi.string().min(2).max(255).required(),
    bio:Joi.string().max(65000)
})