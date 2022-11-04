import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectName } from 'redux/auth/authSelectors';
import { Button } from '@mui/material';
import s from './UserAuthMenu.module.css';

export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <div className={s.authMenu}>
      <p>{`Welcome ${name}!`}</p>
      <Button
        onClick={() => dispatch(logout())}
        variant="outlined"
        width="40"
        height="20"
      >
        Log Out
      </Button>
    </div>
  );
};
