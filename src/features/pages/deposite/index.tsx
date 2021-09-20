import NavHeader from "../../../components/nav-header";
import Footer from "./components/footer";
import Header from "./components/header";
import PurchaseButton from "./components/purchase-button";
import Styles from "./deposite.module.scss";

interface Props {}

const Deposite: React.FC<Props> = (props) => {
  return (
    <div className={`page ${Styles.deposite}`}>
      <NavHeader title='Deposite' link='/home' />
      <Header />
      <PurchaseButton text='Continue Purchase' />
      <Footer />
      <PurchaseButton text='Continue to Track Wallet Bridge' />
    </div>
  );
};

export default Deposite;
