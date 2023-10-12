import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import style from "./index.module.scss";

const CardList = ({ width, height, color, searchFilter }) => {
  const [films, setFilms] = useState([]);

  const API_URL = "http://192.168.102.44:8080/api/movies";

  useEffect(() => {
    const fetchFlims = async () => {
      const { data } = await axios.get(API_URL);
      setFilms(data);
    };
    fetchFlims();
  }, []);

  return (
    <div className={style.grid}>
      {searchFilter
        ? films
            .filter((el) =>
              el.localName.toLowerCase().includes(searchFilter.toLowerCase())
            )
            .map((el) => (
              <Card
                width={width}
                height={height}
                {...el}
                key={el.id}
                color={color}
              />
            ))
        : films.map((el) => (
            <Card
              width={width}
              height={height}
              {...el}
              key={el.id}
              color={color}
            />
          ))}
    </div>
  );
};

export default CardList;
