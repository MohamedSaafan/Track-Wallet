import Styles from "./currencies.module.scss";
import logo from "../../../../images/header-card/logo.svg";
interface Props {}

const Currencies: React.FC<Props> = (props) => {
  return (
    <div className={Styles.currencies}>
      <div className={Styles.currencies__left}>
        <h3 className={Styles.currencies__heading}>0 WETH</h3>
        <h5 className={Styles.currencies__usd}>0 USD</h5>
      </div>
      <div className={Styles.currencies__right}>
        <img src={logo} alt='Track Wallet' />
      </div>
    </div>
  );
};

export default Currencies;
