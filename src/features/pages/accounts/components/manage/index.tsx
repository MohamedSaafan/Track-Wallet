import { Link } from "react-router-dom";
import Styles from "./manage.module.scss";

interface Props {}

const Manage: React.FC<Props> = (props) => {
  return (
    <div className='page'>
      Manage goes here...
      <Link to='/accounts'>Back</Link>
    </div>
  );
};

export default Manage;
