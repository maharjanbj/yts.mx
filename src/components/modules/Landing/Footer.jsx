import "../../../assets/scss/Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content flex flex-col align-center justify-center">
        <div className="footer-text flex">
          YTS @ 2011-2019 <p>Home - Browse Movies - Blog - Contact - DMCA -</p>
        </div>
        <div className="footer-text">
          By using this site you agree to and accept our User Agreement, which
          can be read here.
        </div>
      </div>
    </footer>
  );
};
