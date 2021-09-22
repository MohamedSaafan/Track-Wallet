import { Redirect, Route, Switch } from "react-router";
import Styles from "./accounts.module.scss";
import AccountsHome from "./components/account-home";
import Manage from "./components/manage";

interface Props {}

const Accounts: React.FC<Props> = (props) => {
  return (
    <div>
      <Switch>
        <Route path='/accounts/home' component={AccountsHome} />
        <Route path='/accounts/manage' component={Manage} />
        <Redirect to='/accounts/home' />
      </Switch>
    </div>
  );
};

export default Accounts;
