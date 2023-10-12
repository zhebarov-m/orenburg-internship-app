import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Card = ({
  id,
  urlIcon,
  averageRating,
  localName,
  genres,
  color,
  height,
  width,
}) => {

  const filmId = useSelector(state => state.film.filmId)
  const dispatch = useDispatch()
  console.log(filmId);
  
  const onHandleAddId = () => {
    dispatch(setFilmId(id))
  }

  return (
    <div className={style.card}>
      {/* <Link to="/film-info"> */}
        <div
          style={{ width: `${width}px`, height: `${height}px` }}
          className={style.imgCont}
        >
          <img src={urlIcon} alt="filmImage" />
          <div className={style.imgDarking}></div>
          <div className={style.playContainer}>
            <div className={style.playFilm}></div>
          </div>
        </div>
      {/* </Link> */}
      <h6>{averageRating}</h6>
      <Link to={`/film-info/${id}`}>
        <h4 onClick={onHandleAddId} style={{ color: `${color}` }}>{localName}</h4>
      </Link>
      {genres.map((el, id) => (
        <span style={{ color: `${color}` }} key={id}>
          {el}
          {id !== genres.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
};

export default Card;
