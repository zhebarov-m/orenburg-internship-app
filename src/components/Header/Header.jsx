import React, { useState } from "react";
import style from "./index.module.scss";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Buttons from "./Buttons/Buttons";
import SearchModal from "../Modal/SearchModal";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpenClick = () => {
    setOpen(!open);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header className={style.container}>
      <Logo />
      <Nav />
      <Buttons open={open} openModal={handleOpenClick} />
      <SearchModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </header>
  );
};

export default Header;
