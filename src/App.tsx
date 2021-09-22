import { MemoryRouter, Redirect, Route, Switch } from "react-router";
import "./App.css";
import Accounts from "./features/pages/accounts";
import Deposite from "./features/pages/deposite";
import Home from "./features/pages/home/home";
import Login from "./features/pages/login/login";
import Send from "./features/pages/send";

function App() {
  return (
    <div className='App'>
      <MemoryRouter>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/deposite' component={Deposite} />
          <Route path='/send' component={Send} />
          <Route path='/accounts' component={Accounts} />
          <Redirect to='/login' />
        </Switch>
      </MemoryRouter>
    </div>
  );
}

export default App;
