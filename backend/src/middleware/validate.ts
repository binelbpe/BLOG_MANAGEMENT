import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const validate = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const errors: { [key: string]: string } = {};
      error.details.forEach((detail) => {
        errors[detail.path[0]] = detail.message;
      });
      return res.status(400).json({
        message: "Validation failed",
        errors,
      });
    }

    next();
  };
};

// Validation schemas
export const schemas = {
  register: Joi.object({
    username: Joi.string()
      .required()
      .min(3)
      .max(20)
      .pattern(/^[a-zA-Z0-9_]+$/)
      .messages({
        "string.pattern.base": "Username can only contain letters, numbers, and underscores",
        "string.min": "Username must be at least 3 characters long",
        "string.max": "Username cannot exceed 20 characters",
        "string.empty": "Username is required",
      }),

    email: Joi.string()
      .required()
      .email()
      .max(50)
      .messages({
        "string.email": "Please enter a valid email address",
        "string.max": "Email cannot exceed 50 characters",
        "string.empty": "Email is required",
      }),

    password: Joi.string()
      .required()
      .min(6)
      .max(100)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
      .messages({
        "string.pattern.base": 
          "Password must contain at least one uppercase letter, one lowercase letter, and one number",
        "string.min": "Password must be at least 6 characters long",
        "string.max": "Password cannot exceed 100 characters",
        "string.empty": "Password is required",
      }),
  }),

  login: Joi.object({
    email: Joi.string()
      .required()
      .email()
      .messages({
        "string.email": "Please enter a valid email address",
        "string.empty": "Email is required",
      }),

    password: Joi.string()
      .required()
      .messages({
        "string.empty": "Password is required",
      }),
  }),

  blog: Joi.object({
    title: Joi.string()
      .required()
      .min(3)
      .max(100)
      .trim()
      .messages({
        "string.min": "Title must be at least 3 characters long",
        "string.max": "Title cannot exceed 100 characters",
        "string.empty": "Title is required",
      }),

    content: Joi.string()
      .required()
      .min(50)
      .max(5000)
      .trim()
      .messages({
        "string.min": "Content must be at least 50 characters long",
        "string.max": "Content cannot exceed 5000 characters",
        "string.empty": "Content is required",
      }),
  }),
};
