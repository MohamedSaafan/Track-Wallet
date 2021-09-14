import Asset from "../asset-component";
import Styles from "./assets.module.scss";

interface Props {}

const Assets: React.FC<Props> = (props) => {
  return (
    <div className={Styles.assets}>
      <div className='container'>
        <div className='assets-scrollable-container'>
          <h3 className={Styles.assets__heading}>ERC20</h3>
          <Asset />
          <Asset />
          <Asset />
          <h3 className={Styles.assets__heading}>ERC721</h3>
          <Asset />
          <Asset />
          <Asset />
        </div>
      </div>
    </div>
  );
};

export default Assets;
