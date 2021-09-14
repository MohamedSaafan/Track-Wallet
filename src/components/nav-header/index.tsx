import Styles from "./nav-header.module.scss";
import arrowBackIcon from "../../images/nav-header/arrow-back.svg";
interface Props {}

const NavHeader: React.FC<Props> = (props) => {
  return (
    <header className={Styles.nave}>
      <nav>
        <img src={arrowBackIcon} alt='back' />
      </nav>
    </header>
  );
};
