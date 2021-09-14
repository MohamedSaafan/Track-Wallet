import Styles from "./account.module.scss";
import copyIcon from "../../../../images/header-card/copy.svg";
import navigateIcon from "../../../../images/header-card/navigate.svg";
interface Props {}

const Account: React.FC<Props> = (props) => {
  return (
    <div className={Styles.account}>
      <div className={Styles.account__left}>User Name</div>
      <div className={Styles.account__right}>
        <p className={Styles.account__address}>[Track:1234...2321]</p>
        <button className={`${Styles.account__btnCopy} ${Styles.account__btn}`}>
          <img src={copyIcon} alt='copy' />
        </button>
        <a href='https://google.com'>
          <button className={Styles.account__btn}>
            <img src={navigateIcon} alt='open in new window' />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Account;
