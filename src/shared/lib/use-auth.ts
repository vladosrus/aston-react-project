import { useSelector } from 'react-redux';
import { isAuthField } from '../../entities/user/model/slice';

export const useAuth = () => {
  const isAuth = useSelector(isAuthField);

  return isAuth;
};
