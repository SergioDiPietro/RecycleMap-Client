import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from './store/user/selector';

export const RequireAuth = ({ children }) => {
  const user = useSelector(getUser);
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};
