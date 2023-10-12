import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import playIcon from "../../../assets/svg/PlayTransperent.svg";
import style from "./index.module.scss";
import { Box, Typography } from "@mui/material";

const FilmMainInfo = ({
  urlIcon,
  localName,
  originalName,
  averageRating,
  description,
}) => {
  

  return (
    <div style={{ display: "flex", gap: 50, alignItems: "center" }}>
      <img style={{ width: 404, height: 560 }} src={urlIcon} alt="" />
      <div className={style.filmText}>
        <div className="crumbs"></div>
        <h2>{localName}</h2>
        <span className={style.originalName}>{originalName}</span>
        <span className={style.fav}>В избранное</span>
        <div className={style.rating}>
          <Stack spacing={2} direction="row">
            <Box sx={{ position: "relative", display: "inline-flex", bgcolor: 'rgba(75, 203, 54, 0.30);', borderRadius: '50%' }}>
              <CircularProgress
                sx={{ color: '#4BCB36' }}
                variant="determinate"
                
                value={averageRating * 20}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{ color: "#fff" }}
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  {averageRating * 2}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </div>
        <p>{description}</p>
        <button>
          <img src={playIcon} alt="" />
          Смотреть трейлер
        </button>
      </div>
    </div>
  );
};

export default FilmMainInfo;
