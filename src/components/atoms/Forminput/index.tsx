import type { FC, InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';

import {cva } from 'class-variance-authority';
import { useFormContext } from 'react-hook-form';

import ErrorMessage from '@components/atoms/errorPage';

import {cn } from '@sglara/cn'; 

const inputVariants = cva(
  'desktop:h-12 flex disabled:opacity-50 px-3 py-1 border rounded-md focus-visible:ring-1 focus-visible:ring-ring w-full h-10 file:font-medium text-sm file:text-sm transition-all disabled:cursor-not-allowed ease-in-out focus-visible:outline-none',
  {
    variants: {
      variant: {
        default:
          'bg-white text-black placeholder:text-muted focus:border-orange-default',
        transparent:
          'bg-transparent file:bg-transparent placeholder:text-muted border-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  name: string;
  hasFormError?: boolean;
}

const Input: FC<InputProps> = ({
  className,
  name,
  variant,
  label,
  type,
  hasFormError,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className={className}>
      <label htmlFor={`input-${name}`} className="py-1 text-sm desktop:text-md">
        {label}
      </label>
      <input
        id={`input-${name}`}
        type={type}
        className={cn(
          inputVariants({ variant, className }),
          `${(error || hasFormError) && 'border-red/80 focus:border-red border-2'}`
        )}
        {...register(name)}
        {...props}
      />
      {error ? <ErrorMessage errMessage={error} iconRequired /> : null}
    </div>
  );
};

export default Input;