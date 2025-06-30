// routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import SignUpPage from './pages/login/login'; // this is your sign-up page
import Home from './pages/home/home';
import ProtectedRoute from './components/atoms/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: '',
        element: <SignUpPage />, 
      },
      {
        path: 'home',
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;



