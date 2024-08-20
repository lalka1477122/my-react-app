import { Link } from "react-router-dom";
import s from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <nav className={s.container}>
      <Link to="/">Главная</Link>
      <Link to="/generete">генерация</Link>
      <Link to="/scan">скан кода</Link>
      <Link to="/"> история генерирования</Link>
      <Link to="/"> история сканирования</Link>
    </nav>
  );
};
