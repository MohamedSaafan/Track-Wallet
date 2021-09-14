import Account from "./components/account";
import Currencies from "./components/currencies";
import Styles from "./header-card.module.scss";

interface Props {}

const HeaderCard: React.FC<Props> = (props) => {
  return (
    <div className={Styles.card}>
      <div className='container'>
        <Account />
        <div className={Styles.card__line}></div>
        <Currencies />
      </div>
    </div>
  );
};

export default HeaderCard;
