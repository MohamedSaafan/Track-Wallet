import { NavLink } from "react-router-dom";
import Styles from "./nav.module.scss";

interface Props {}

const Nav: React.FC<Props> = (props) => {
  return (
    <div className={Styles.nav}>
      <ul>
        <li className={Styles.nav__link}>
          <NavLink
            to='/accounts/home'
            className={Styles.nav__nav}
            activeClassName={Styles.nav__navActive}
          >
            MyAccounts
          </NavLink>
        </li>
        <li className={Styles.nav__link}>
          <NavLink
            to='/accounts/manage'
            className={Styles.nav__nav}
            activeClassName={Styles.nav__navActive}
          >
            Manage
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
