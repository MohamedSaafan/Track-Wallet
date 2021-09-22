import Styles from "./account.module.scss";
import activeAccountIcon from "../../../../../images/header-bar/person.svg";
import accountIcon from "../../../../../images/account.svg";
import checkedIcon from "../../../../../images/checked.svg";
interface Props {
  isActive: boolean;
  accountName: string;
  accountAddress: string;
}

const Account: React.FC<Props> = ({
  isActive,
  accountName,
  accountAddress,
}) => {
  return (
    <div className={Styles.account}>
      <div className={Styles.account__icons}>
        <span className={Styles.account__checked}>
          {" "}
          {isActive ? (
            <img
              src={checkedIcon}
              alt='checked icon'
              className={Styles.account__checked}
            />
          ) : (
            <> </>
          )}
        </span>
        {isActive ? (
          <img src={activeAccountIcon} alt='account-symbol' />
        ) : (
          <img src={accountIcon} alt='account-icon' />
        )}
      </div>
      <div className={Styles.account__content}>
        <h3 className={Styles.account__number}>{accountName}</h3>
        <p className={Styles.account__address}>{accountAddress}</p>
      </div>
    </div>
  );
};

export default Account;
