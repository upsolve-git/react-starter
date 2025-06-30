import { z } from 'zod';
import validator from 'validator';

export const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid email')
      .max(50, 'Email is too long')
      .trim(),
    password: z
      .string()
      .refine(
        validator.isStrongPassword,
        'Password must be at least 8 characters long and include lowercase, uppercase, and a symbol'
      ),
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
