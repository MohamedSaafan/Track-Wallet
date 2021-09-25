import Styles from "./footer.module.scss";

interface Props {}

const Footer: React.FC<Props> = (props) => {
  return (
    <footer className={Styles.footer}>
      <p>
        If you ever have questions or see something fishy, email
        <a href='#' className={Styles.footer__link}>
          {" "}
          support@mechdome.com{" "}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
