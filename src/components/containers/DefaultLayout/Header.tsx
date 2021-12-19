import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const Header = () => {
  const { user, isAuth } = useTypedSelector((redux) => redux.auth); //через useTypedSelector підключаємося до redux і тянемо звідти дані;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Авто США
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {isAuth ? (                                          //якщо авторизований
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  {user?.email}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Вихід
                </Link>
              </li>
            </ul>
          ) : (                                             //якщо не авторизований
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Вхід
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Header;
