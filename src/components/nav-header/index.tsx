import Styles from "./nav-header.module.scss";
import arrowBackIcon from "../../images/nav-header/arrow-back.svg";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  link: string;
}

const NavHeader: React.FC<Props> = ({ link, title }) => {
  return (
    <header className={Styles.nav}>
      <nav>
        <Link to={link} className={Styles.nav__link}>
          <img src={arrowBackIcon} alt='back' />
        </Link>
      </nav>
      <h3 className={Styles.nav__title}>{title}</h3>
    </header>
  );
};

export default NavHeader;
