
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading, isDemoMode } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // You could show a loading spinner here
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }
  
  if (!user && !isDemoMode) {
    // Redirect to login if user is not authenticated and not in demo mode
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
