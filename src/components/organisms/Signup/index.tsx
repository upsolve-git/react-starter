import { useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '@components/atoms/FormButton';
import Input from '@components/atoms/Forminput';
import ErrorMessage from '@components/atoms/errorPage';

import { routes } from '@constants/routes.ui';
import { signUpSchema, TSignUpSchema } from '@validations/auth';
import { useAuthStore } from '@stores/authStore';
import { signUp } from  '@interface/api/auth';

const SignUpForm: FC = () => {
  const formMethods = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const isLoading = formMethods.formState.isSubmitting;
  const navigate = useNavigate();

  // Get all needed store actions
  const {
    isAuthenticated,
    setAccessToken,
    setUser,
    setError: setStoreError,
    setIsAuthenticated,
  } = useAuthStore();

  const [formError, setFormError] = useState('');
  const [hasFormError, setHasFormError] = useState(false);

  const onSubmit = async (data: TSignUpSchema) => {
    try {
      setFormError('');
      setHasFormError(false);
      setStoreError(null);

      // Call API
      const response = await signUp(data);

      // Update store
      setAccessToken(response.token);
      setUser({
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
      });
      setIsAuthenticated(true);

      // Redirect
      navigate(routes.home);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Sign-up failed';
      setFormError(errorMessage);
      setStoreError(errorMessage);
      setHasFormError(true);
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
          <Input
            label="First Name"
            type="text"
            name="firstName"
            placeholder="Your first name"
            hasFormError={hasFormError}
          />
          <Input
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Your last name"
            hasFormError={hasFormError}
          />
          <Input
             label="Phone Number"
             type="text"
             name="phoneNumber"
             placeholder="Your phone number"
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