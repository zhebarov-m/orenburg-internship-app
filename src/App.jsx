import "./App.css";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import FilmDetails from "./pages/FilmDetails/FilmDetails";
import { useSelector } from "react-redux";

function App() {
  const backImage = useSelector((state) => state.film.backImage);

  return (
    <div
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundColor: "#1e2538",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="bak"
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/film-info/:id" element={<FilmDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
