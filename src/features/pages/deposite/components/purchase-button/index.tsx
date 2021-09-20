import Styles from "./purchase-button.module.scss";

interface Props {
  text: string;
}

const PurchaseButton: React.FC<Props> = ({ text }) => {
  return <button className={Styles.btn}>{text}</button>;
};

export default PurchaseButton;
