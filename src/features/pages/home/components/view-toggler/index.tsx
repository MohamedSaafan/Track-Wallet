import { NavLink as Link } from "react-router-dom";
import Styles from "./view-toggler.module.scss";

interface Props {}

const ViewToggler: React.FC<Props> = (props) => {
  return (
    <div className={Styles.toggler}>
      <Link
        to='/home/assets'
        className={Styles.toggler__link}
        activeClassName={Styles.toggler__linkActive}
      >
        Assets
      </Link>
      <div className={Styles.toggler__line}></div>
      <Link
        to='/home/activities'
        className={Styles.toggler__link}
        activeClassName={Styles.toggler__linkActive}
      >
        Activities
      </Link>
    </div>
  );
};

export default ViewToggler;
