import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/login/login.tsx';
import Home from './pages/home/home.tsx';
import ProtectedRoute from './components/atoms/ProtectedRoute.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '',
        element: <ProtectedRoute />,
        children: [
          {
            path: 'home',
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default router;