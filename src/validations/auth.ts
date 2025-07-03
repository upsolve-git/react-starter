import { z } from 'zod';
import validator from 'validator';

// Schema definition
export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email')
    .max(50, 'Email is too long')
    .transform(email => email.toLowerCase().trim()),

  password: z
    .string()
    .refine(
      validator.isStrongPassword,
      'Password must be at least 8 characters with lowercase, uppercase, number, and symbol'
    ),

  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(30, 'First name is too long')
    .trim(),

  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(30, 'Last name is too long')
    .trim(),

  phoneNumber: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number too long'),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
