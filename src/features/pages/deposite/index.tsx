import Styles from "./deposite.module.scss";

interface Props {}

const Deposite: React.FC<Props> = (props) => {
  return <div className={`page ${Styles.deposite}`}>deposite page</div>;
};

export default Deposite;
