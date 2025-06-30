import { FC } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from "@components/organisms/Signup";
import { routes } from '@constants/routes.ui';

export interface SignUpPageProps {}

const SignUpPage: FC<SignUpPageProps> = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="flex justify-center mb-8">
            <Link to={routes.home}>
              <h1 className="text-3xl font-bold text-gray-800">React Starter</h1>
            </Link>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Create Account</h2>
            <p className="text-gray-600 mt-2">
              Get started with your email and password
            </p>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;