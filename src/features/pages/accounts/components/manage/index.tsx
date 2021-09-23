import { Link } from "react-router-dom";
import NavHeader from "../../../../../components/nav-header";
import Account from "../account";
import Styles from "./manage.module.scss";

interface Props {}

const Manage: React.FC<Props> = (props) => {
  return (
    <div className='page'>
      <NavHeader title='Manage Accounts' link='/accounts' />
      <div className={Styles.accounts}>
        <Account
          isActive
          accountAddress='[Track:1234...1344]'
          accountName='Account#1'
        />
        <Account
          isActive={false}
          accountAddress='[Track:1234...1344]'
          accountName='Account#1'
        />
        <Account
          isActive={false}
          accountAddress='[Track:1234...1344]'
          accountName='Account#1'
        />
      </div>
    </div>
  );
};

export default Manage;
