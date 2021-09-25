import Styles from "./header.module.scss";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <header className={`container ${Styles.header}`}>
      <p className={Styles.header__details}>
        If you ever change browsers or move computers, you will need this phrase
        to access your accounts.
        <br /> Save them somewhere safe and secret.
      </p>
      <div className={Styles.header__warning}>
        <div className={Styles.header__warning__symbol}>!</div>
        Do not share this phrase with anyone! These words can be used to steal
        all of your assets
      </div>
    </header>
  );
};

export default Header;
