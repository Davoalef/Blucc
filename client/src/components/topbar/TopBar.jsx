import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Inicio
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Sobre nosotros
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Contactanos
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Blog
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "Cierra Sesión"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Inicia Sesión
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Registrar
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}