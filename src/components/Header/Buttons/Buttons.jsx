import React, { useState } from "react";
import search from "../../../assets/svg/search-icon.svg";
import style from "./index.module.scss";
import { createPortal } from "react-dom";

const Buttons = (props) => {
  const { open, openModal } = props;
  console.log(open);

  return (
    <div className={style.container}>
      {createPortal(<></>, document.body)}
      <button onClick={openModal} className={style.search}>
        <img src={search} alt="search" />
      </button>
      <button className={style.signIn}>Войти</button>
    </div>
  );
};

export default Buttons;
