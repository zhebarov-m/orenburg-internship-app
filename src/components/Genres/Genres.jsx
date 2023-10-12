import React from "react";
import style from "./index.module.scss";

const Genres = () => {
  const genreList = [
    "Все",
    "Боевики",
    "Приключения",
    "Комедии",
    "Фантастика",
    "Триллеры",
    "Драма",
  ];

  return (
    <div className={style.container}>
      <h2>Сейчас в кино</h2>
      <div className={style.line}></div>
      <div className={style.genreList}>
        {genreList.map((el, id) => (
          <a key={id} href="#" className={style.genre}>
            {el}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Genres;
