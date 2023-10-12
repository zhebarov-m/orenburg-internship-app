import React from "react";
import Genres from "../components/Genres/Genres";
import CardList from "../components/CardList/CardList";
import style from './index.module.scss'

const Home = () => {
  return (
    <main className={style.homeMain}>
      <Genres />
      <CardList />
    </main>
  );
};

export default Home;
