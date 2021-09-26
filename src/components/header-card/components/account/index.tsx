import Styles from "./account.module.scss";
import copyIcon from "../../../../images/header-card/copy.svg";
import navigateIcon from "../../../../images/header-card/navigate.svg";
import { useState } from "react";
interface Props {}

const Account: React.FC<Props> = (props) => {
  const [shouldDisplayCopyAlert, setShouldDisplayCopyAlert] = useState(false);

  const showCopoyAlert = () => {
    setShouldDisplayCopyAlert(true);
  };
  const copyAddress = () => {
    showCopoyAlert();
  };

  const alertCopyStyle = shouldDisplayCopyAlert ? { display: "flex" } : {};
  return (
    <div className={Styles.account}>
      <div className={Styles.account__left}>User Name</div>
      <div className={Styles.account__right}>
        <p className={Styles.account__address}>[Track:1234...2321]</p>
        <button
          className={`${Styles.account__btnCopy} ${Styles.account__btn}`}
          onClick={copyAddress}
        >
          <div className={Styles.account__alert} style={alertCopyStyle}>
            {" "}
            {shouldDisplayCopyAlert ? "Address Copied" : "Copy Address"}{" "}
          </div>
        </button>
        <a href='https://google.com'>
          <button
            className={`${Styles.account__btnNavigate} ${Styles.account__btn}`}
          >
            <div className={Styles.account__alert}> View on Explorer </div>

            <img src={navigateIcon} alt='open in new window' />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Account;
