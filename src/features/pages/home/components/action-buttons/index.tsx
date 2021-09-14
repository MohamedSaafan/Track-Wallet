import Styles from "./action-buttons.module.scss";
import depositeIcon from "../../../../../images/home/deposite.svg";
import sendIcon from "../../../../../images/home/send.svg";
import swapIcon from "../../../../../images/home/swap.svg";
import { Link } from "react-router-dom";
interface Props {}

const ActionButtons: React.FC<Props> = (props) => {
  return (
    <div className={Styles.actions}>
      <Link to='/deposite' className={Styles.actions__btn}>
        <img alt='Deposite' src={depositeIcon} />
        <h3 className={Styles.actions__label}>Deposite</h3>
      </Link>
      <Link to='/send' className={Styles.actions__btn}>
        <img alt='Send' src={sendIcon} />
        <h3 className={Styles.actions__label}>Send</h3>
      </Link>
      <Link to='/swap' className={Styles.actions__btn}>
        <img alt='Swap' src={swapIcon} />
        <h3 className={Styles.actions__label}>Swap</h3>
      </Link>
    </div>
  );
};

export default ActionButtons;
