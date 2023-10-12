import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import CardList from "../CardList/CardList";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  overflow: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: 5,
};

export default function SearchModal({ open, handleOpen, handleClose }) {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

  const handleChangeValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            value={searchValue}
            onChange={(e) => handleChangeValue(e)}
            sx={{ width: "90%", mb: 5 }}
            id="standard-basic"
            label="Введите названия фильма"
            variant="standard"
          />
          <CardList
            searchFilter={searchValue}
            width={180}
            height={240}
            color={"black"}
          />
        </Box>
      </Modal>
    </>
  );
}
