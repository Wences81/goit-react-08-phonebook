import { useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import styles from "../components/AppBar/AppBar.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar>
      <Nav>
        <NavLink
          exact
          to="/"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Главная страница
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/contacts"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Контакты
          </NavLink>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
