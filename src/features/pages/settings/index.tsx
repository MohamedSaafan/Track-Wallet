import NavHeader from "../../../components/nav-header";
import Styles from "./settings.module.scss";

import Footer from "./components/footer";
import Main from "./components/main";
import { useState } from "react";
import CurrencyPopUp from "./components/currency-popup";
interface Props {}

const Settings: React.FC<Props> = (props) => {
  const [shouldShowCurrencyPopup, setShouldShowCurrencyPopup] = useState(false);

  const openCurrencyPopup = () => {
    console.log("from open popup");
    setShouldShowCurrencyPopup(true);
  };

  const closeCurrencyPopup = () => {
    setShouldShowCurrencyPopup(false);
  };
  return (
    <div className='page'>
      <NavHeader title='Settings' link='/accounts' />
      <Main openPopup={openCurrencyPopup} />
      <Footer />
      {shouldShowCurrencyPopup && (
        <CurrencyPopUp closePopup={closeCurrencyPopup} />
      )}
    </div>
  );
};

export default Settings;
