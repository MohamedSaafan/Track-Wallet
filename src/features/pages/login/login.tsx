import { useState } from "react";
import Footer from "./components/footer";
import Form from "./components/form";
import Header from "./components/header/header";
import PopUp from "./components/pop-up";
import Styles from "./login.module.scss";
interface Props {}
const Login: React.FC<Props> = (props) => {
  const [isPopupModelOpened, setIsPopupModelOpened] = useState(false);
  return (
    <div className={`page ${Styles.login} `}>
      <div className='container'>
        <Header />
        <Form />
        <Footer setIsPopupModelOpened={setIsPopupModelOpened} />
      </div>
      {isPopupModelOpened ? (
        <PopUp setIsPopupModelOpened={setIsPopupModelOpened} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Login;
