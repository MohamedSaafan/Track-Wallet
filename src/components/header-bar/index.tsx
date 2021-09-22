import Styles from "./header-bar.module.scss";
import personIcon from "../../images/header-bar/person.svg";
import { Link } from "react-router-dom";
interface Props {}
const HeaderBar: React.FC<Props> = (props) => {
  return (
    <div className={`container ${Styles.bar}`}>
      <div className={Styles.bar__logo}>Track Network</div>
      <Link to='/accounts'>
        <img src={personIcon} alt='Person Icon' />
      </Link>
    </div>
  );
};

export default HeaderBar;
