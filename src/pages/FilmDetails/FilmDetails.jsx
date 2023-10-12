import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilmData } from "../../redux/slices/FilmSlice";
import { useParams } from "react-router";
import FilmMainInfo from "../../components/Film/FilmMainInfo/FilmMainInfo";

const FilmDetails = () => {
  const filmData = useSelector((state) => state.film.filmData);
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            `http://192.168.102.44:8080/api/movie/${id}`
          );
          dispatch(setFilmData(data));
        } catch (error) {
          console.error(error.message);
        }
      };
      fetchData();
    }
  }, [id, dispatch]);

  return (
    <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <FilmMainInfo {...filmData} />
    </main>
  );
};

export default FilmDetails;
