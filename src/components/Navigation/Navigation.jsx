import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import s from './Navigation.module.css';
export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <ul className={s.navigation}>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        {token && (
          <li>
            <NavLink to="/contacts">Users</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
