import Activity from "../activity-component";
import Styles from "./activites.module.scss";

interface Props {}

const Activities: React.FC<Props> = (props) => {
  return (
    <div className={Styles.activities}>
      <h3 className={Styles.activities__heading}>Day Month</h3>
      <Activity />
      <button className={Styles.activities__btn}>View on Block Explorer</button>
    </div>
  );
};

export default Activities;
