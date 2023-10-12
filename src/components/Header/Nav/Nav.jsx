import React from "react";
import style from "./index.module.scss";

const Nav = () => {
  const navList = [
    "Афиша",
    "Медиа",
    "Фильмы",
    "Актёры",
    "Новости",
    "Подборки",
    "Категории",
  ];
  return (
    <nav className={style.container}>
      {navList.map((el, id) => (
        <span key={id}>
          <a className={style.elem} href="#">
            {el}
          </a>
        </span>
      ))}
    </nav>
  );
};

export default Nav;
