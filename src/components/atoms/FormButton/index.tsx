import type { ButtonHTMLAttributes, FC } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@sglara/cn';

const formButtonVariants = cva(
  'inline-flex justify-center items-center disabled:opacity-50 rounded-md font-medium text-md transition-all duration-500 disabled:pointer-events-none ease-in-out',
  {
    variants: {
      variant: {
        default: 'text-blue-default bg-orange-default hover:bg-orange-dark',
        secondary:
          'text-white bg-gradient-to-r from-orange-default to-orange-dark',
        outline: '',
      },
      size: {
        default: 'px-8 py-2',
        sm: 'px-3 tablet:px-6 py-2 text-sm font-bold',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface FormButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof formButtonVariants> {
  isLoading?: boolean;
}

const FormButton: FC<FormButtonProps> = ({
  className,
  size,
  variant,
  children,
  isLoading,
  ...props
}) => {
  return (
    <button
      className={cn(formButtonVariants({ variant, size, className }))}
      type="submit"
      {...props}
      disabled={isLoading || props.disabled}
    >
      <div className="flex items-center gap-2">
        {isLoading && <AiOutlineLoading className="animate-spin" size={20} />}
        {children}
      </div>
    </button>
  );
};

export default FormButton;