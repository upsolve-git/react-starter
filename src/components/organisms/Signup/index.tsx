import { useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '@components/atoms/FormButton';
import Input from '@components/atoms/Forminput';
import ErrorMessage from '@components/atoms/errorPage';

import { routes } from '@constants/routes.ui';
import { signUpSchema } from '@validations/auth';
import { useAuthStore } from '@stores/authStore';

interface SignUpResponse {
  username: string;
  fullName: string;
}

const SignUpForm: FC = () => {
  const formMethods = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const isLoading = formMethods.formState.isSubmitting;
  const navigate = useNavigate();

  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated); // ✅ proper hook
  const [formError, setFormError] = useState('');
  const [hasFormError, setHasFormError] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    try {
      // Simulate mock response
      const mockResponse: SignUpResponse = {
        username: data.email,
        fullName: `${data.firstName || ''} ${data.lastName || ''}`.trim(),
      };

      console.log('Sign up successful:', mockResponse);

     
      setIsAuthenticated(true);
      setFormError('');
      setHasFormError(false);

    
      navigate(routes.home);
    } catch (error) {
      setHasFormError(true);
      setFormError('An error occurred during sign up');
    }
  };

  return (
    <div className="desktop:w-3/4 flex flex-col gap-2">
      <h2 className="font-bold text-xl">Create Your Account</h2>

      <FormProvider {...formMethods}>
        <form
          className="flex flex-col gap-4"
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
          <Input
            label="Email"
            type="text"
            name="email"
            placeholder="Enter your email"
            hasFormError={hasFormError}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Create a password"
            hasFormError={hasFormError}
          />

          <Button variant="secondary" isLoading={isLoading} className="mt-4">
            Create Account
          </Button>

          {formError && (
            <div className="flex justify-center text-center text-xs">
              <ErrorMessage errMessage={formError} iconRequired />
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUpForm;
