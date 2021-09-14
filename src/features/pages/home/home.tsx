import { Route, Switch, Redirect } from "react-router-dom";
import HeaderBar from "../../../components/header-bar";
import HeaderCard from "../../../components/header-card";
import ActionButtons from "./components/action-buttons";
import Activities from "./components/activities";
import Assets from "./components/assets";
import ViewToggler from "./components/view-toggler";
import Styles from "./home.module.scss";
interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <div className={`page ${Styles.home}`}>
      <HeaderBar />
      <HeaderCard />
      <ActionButtons />
      <ViewToggler />

      <Switch>
        <Route path='/home/assets' component={Assets} />

        <Route path='/home/activities' component={Activities} />

        <Redirect to='/home/assets' />
      </Switch>
    </div>
  );
};

export default Home;
