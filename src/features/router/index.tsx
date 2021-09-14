import { useAppSelector } from "../../app/hooks";
import Login from "../pages/login/login";

interface Props {}

const Router: React.FC<Props> = (props) => {
  const state = useAppSelector((state) => state);

  const renderElements = () => {
    if (state.router.login) return <Login />;

    return <></>;
  };
  return <div>{renderElements()}</div>;
};
