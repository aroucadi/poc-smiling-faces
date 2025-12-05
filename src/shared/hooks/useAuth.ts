
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const useAuth = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  return { isAuthenticated: !!token };
};
