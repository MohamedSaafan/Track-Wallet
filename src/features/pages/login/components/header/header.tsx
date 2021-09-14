import Styles from "./header.module.scss";
import trackWalletMainLogo from "../../../../../images/login/login-logo-header.svg";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <header className={Styles.header}>
      <img src={trackWalletMainLogo} alt='Track Wallet' />
      <h1 className={Styles.header__heading}>Track Wallet</h1>
      <p className={Styles.header__details}>Your Digital Passport</p>
    </header>
  );
};

export default Header;
