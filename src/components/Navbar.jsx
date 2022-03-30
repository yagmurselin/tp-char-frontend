import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="flex">
        <div className="left">
          <div className="logo">
            <Link className="header" to="/">
              FundMe
            </Link>
          </div>

          <ul className="links">
            <li>
              <Link className="link-element" to="/about">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link className="link-element" to="/goals">
                Hedeflerimiz
              </Link>
            </li>
            <li>
              <Link className="link-element" to="/achievements">
                Başarılarımız
              </Link>
            </li>
            <li>
              <Link className="link-element" to="/apply ">
                Başvuru
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul className="buttons">
            <li>
              <button
                onClick={() => navigate("/register")}
                className="button-element"
              >
                Kayıt Ol
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/login")}
                className="button-element"
              >
                Giriş Yap
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/eng")}
                className="button-element"
              >
                ENG
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
