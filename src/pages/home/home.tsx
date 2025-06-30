import { useAuthStore } from '@stores/authStore';

const Home = () => {
  const { logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">My App</h1>
            </div>
            <div className="ml-4 flex items-center">
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            🎉 Welcome to the Home Page!
          </h2>
          <p className="text-gray-600 mt-2">
            You’ve successfully signed up !!.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
