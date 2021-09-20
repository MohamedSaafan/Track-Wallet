import Styles from "./from.module.scss";

interface Props {}

const From: React.FC<Props> = (props) => {
  return (
    <>
      <div className={Styles.from}>
        <h5 className={Styles.from__lable}>From </h5>
        <div className={Styles.from__input}>
          <div className={Styles.from__username}>User Name</div>
          <div className={Styles.from__userAddress}>Track:0x1a...0asd</div>
        </div>
      </div>
    </>
  );
};

export default From;
