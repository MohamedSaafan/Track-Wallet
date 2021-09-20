import Styles from "./footer.module.scss";
import logo from "../../../../../images/deposite/logo.svg";
interface Props {}

const Footer: React.FC<Props> = (props) => {
  return (
    <footer className={Styles.footer}>
      <h3 className={Styles.footer__heading}>Deposite with Track Bridge</h3>

      <div className={Styles.footer__brand}>
        <h1>
          {" "}
          <img src={logo} alt='Track Wallet' /> Track Wallet
        </h1>
      </div>
      <p className={Styles.footer__details}>
        If you already have ETH, simply transfer it through the Track Bridge.
      </p>
    </footer>
  );
};
export default Footer;
