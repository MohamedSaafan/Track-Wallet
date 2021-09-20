import Styles from "./header.module.scss";
import purchaseIcon from "../../../../../images/deposite/purchase.svg";

interface Props {}
const Header: React.FC<Props> = (props) => {
  return (
    <header className={Styles.header}>
      <p className={Styles.header__details}>
        How do you want to deposite tokens?
      </p>
      <h3 className={Styles.header__heading}>Purchase assets on Track</h3>

      <div className={Styles.header__image}>
        <img src={purchaseIcon} alt='purchase chart' />
      </div>
      <p className={Styles.header__details}>
        Deposite funds straight to your Track account.
      </p>
    </header>
  );
};

export default Header;
