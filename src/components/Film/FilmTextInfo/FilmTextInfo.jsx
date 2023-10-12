import React from "react";
import style from "./index.module.scss";

const FilmTextInfo = ({
  createdAt,
  countries,
  slogan,
  screenwriters,
  producers,
  operators,
  composers,
  designers,
  editors,
  genres,
  worldwideGross,
  worldPremiereDate,
  localPremiereDate,
  ageCategory,
  durationByMin,
}) => {
  const row1 = [
    "Год",
    "Страна",
    "Слоган",
    "Режиссёр",
    "Сценарий",
    "Продюсер",
    "Оператор",
    "Композитор",
  ];
  const row2 = [
    createdAt?.slice(0, 4),
    countries,
    slogan,
    "Френсис Аннан",
    screenwriters,
    producers,
    operators,
    composers,
  ];
  const row3 = [
    "Художник",
    "Монтаж",
    "Жанр",
    "Сборы в мире",
    "Премьера(мир)",
    "Премьера(РФ)",
    "Возраст",
    "Время",
  ];
  const row4 = [
    designers,
    editors,
    genres,
    worldwideGross,
    worldPremiereDate,
    localPremiereDate,
    ageCategory,
    `${durationByMin} мин`,
  ];
  return (
    <div className={style.gridCont}>
      <div className={style.row}>
        {row1.map((el, id) => (
          <span key={id}>{el}:</span>
        ))}
      </div>
      <div className={`${style.row} ${style.rowYel}`}>
        {row2.map((el, id) => (
          <span key={id}>{el}</span>
        ))}
      </div>
      <div className={style.row}>
        {row3.map((el, id) => (
          <span key={id}>{el}:</span>
        ))}
      </div>
      <div className={`${style.row} ${style.rowYel}`}>
        {row4.map((el, id) => (
          <span key={id}>{el}</span>
        ))}
      </div>
    </div>
  );
};

export default FilmTextInfo;
