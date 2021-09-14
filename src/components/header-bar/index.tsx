import Styles from "./header-bar.module.scss";
import personIcon from "../../images/header-bar/person.svg";
interface Props {}
const HeaderBar: React.FC<Props> = (props) => {
  return (
    <div className={`container ${Styles.bar}`}>
      <div className={Styles.bar__logo}>Track Network</div>
      <img src={personIcon} alt='Person Icon' />
    </div>
  );
};

export default HeaderBar;
