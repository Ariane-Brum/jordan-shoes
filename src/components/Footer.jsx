import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerWrapper}`}>
        <p>
          © 2022 -{" "}
          <a href="https://github.com/Ariane-Brum" target="_blank">
            Ariane Brum
          </a>
        </p>

        <p className={styles.powered}>
          Powered by{" "}
          <a target="_blank" href="https://www.instagram.com/iuricode/">
            @iuricode
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
