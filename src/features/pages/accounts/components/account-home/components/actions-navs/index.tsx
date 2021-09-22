import { Link } from "react-router-dom";
import Styles from "./actions-navs.module.scss";
import connectIcon from "../../../../../../../images/accounts-home-page/connect.svg";
import settingsIcon from "../../../../../../../images/accounts-home-page/settings.svg";
import lockIcon from "../../../../../../../images/accounts-home-page/lock.svg";
interface Props {
  openCreateAccountPopup: () => void;
}

const ActionsNavs: React.FC<Props> = ({ openCreateAccountPopup }) => {
  return (
    <ul className={Styles.navs}>
      <li className={Styles.navs__nav}>
        <button className={Styles.navs__link} onClick={openCreateAccountPopup}>
          + Create Account
        </button>
      </li>
      <li className={Styles.navs__nav}>
        <a className={Styles.navs__link} href='/connect'>
          <span>
            <img src={connectIcon} alt='connect icon' />
          </span>{" "}
          Connect Hardware Wallet
        </a>
      </li>
      <li className={Styles.navs__nav}>
        <Link className={Styles.navs__link} to='/settings'>
          <span>
            <img src={settingsIcon} alt='settings icon' />
          </span>{" "}
          Settings
        </Link>
      </li>
      <li className={Styles.navs__nav}>
        <button className={Styles.navs__link}>
          <span>
            <img src={lockIcon} alt='lock icon' />
          </span>{" "}
          Lock
        </button>
      </li>
    </ul>
  );
};

export default ActionsNavs;
