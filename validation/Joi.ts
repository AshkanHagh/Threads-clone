import Joi from 'joi';

const validator = (schema : Joi.Schema) => (payload : object) => schema.validate(payload, {abortEarly : false});

const register = Joi.object({
    fullName : Joi.string().required(),
    email : Joi.string().email().required(),
    username : Joi.string().required(),
    gender : Joi.string().required(),
    password : Joi.string().min(6).required()
});

export const validateRegister = validator(register);

const verifyAccount = Joi.object({
    activationCode : Joi.string().required(),
    activationToken : Joi.string().required()
});

export const validateVerifyAccount = validator(verifyAccount);

const login = Joi.object({
    email : Joi.string().email().required(),
    password : Joi.string().min(6).required(),
});

export const validateLogin = validator(login);