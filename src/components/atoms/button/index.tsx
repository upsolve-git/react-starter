import type { ButtonHTMLAttributes, FC } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import {cn } from '@sglara/cn'; 

const buttonVariants = cva(
  'inline-flex justify-center items-center disabled:opacity-50 rounded-md font-medium text-md transition-all duration-500 disabled:pointer-events-none ease-in-out',
  {
    variants: {
      variant: {
        default: 'text-blue-default bg-orange-default hover:bg-orange-dark',
        secondary:
          'text-white bg-gradient-to-r from-orange-default to-orange-dark',
        blue: 'text-black bg-blue-light hover:bg-blue-medium disabled:bg-blue-medium',
        white: 'text-black bg-white hover:bg-gray-light',
        black: 'text-white hover:bg-black',
        destructive: 'text-black bg-red hover:bg-red/80 disabled:bg-red/80',
        ghost: 'text-white bg-black border border-black hover:border-white',
        blackGold:
          'bg-black border border-orange-default text-orange-default hover:bg-orange-default hover:text-black hover:border-orange-default',
      },
      size: {
        default: 'px-8 py-2',
        sm: 'px-3 tablet:px-6 py-2 text-sm font-semibold',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  size,
  variant,
  children,
  isLoading,
  isDisabled,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      type="button"
      {...props}
      disabled={isLoading || isDisabled}
    >
      <div className="flex items-center gap-2">
        {isLoading && <AiOutlineLoading className="animate-spin" size={20} />}
        {children}
      </div>
    </button>
  );
};

export default Button;