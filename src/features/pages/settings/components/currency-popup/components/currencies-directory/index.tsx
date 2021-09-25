import Styles from "./currencies-directory.module.scss";

interface Props {}

type Coin = { coin: string; id: string };

const coins: Coin[] = [
  {
    coin: "USD",
    id: "0",
  },
  {
    coin: "GBP",
    id: "1",
  },
  { coin: "CNY", id: "2" },
  { coin: "EUR", id: "3" },
  { coin: "VND", id: "4" },
  { coin: "SGD", id: "5" },
  { coin: "JPY", id: "6" },
];

const CurrenciesDirectory: React.FC<Props> = (props) => {
  return (
    <div className={Styles.directory}>
      {coins.map(({ coin, id }) => (
        <div key={id} className={Styles.directory__coin}>
          {coin}
          {coin === "USD" && <span> (Default)</span>}
        </div>
      ))}
    </div>
  );
};

export default CurrenciesDirectory;
