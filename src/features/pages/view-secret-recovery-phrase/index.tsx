import NavHeader from "../../../components/nav-header";
import Header from "./components/header";
import Main from "./components/main";
import Styles from "./view-secret-recovery-phrase.module.scss";

interface Props {}

const ViewSecretRecoveryPhrase: React.FC<Props> = (props) => {
  return (
    <div className='page'>
      <NavHeader link='/settings' title='View Secret Recovery Phrase' />
      <Header />
      <Main />
    </div>
  );
};

export default ViewSecretRecoveryPhrase;
