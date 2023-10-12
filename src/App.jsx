import "./App.css";

import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import FilmDetails from "./pages/FilmDetails/FilmDetails";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path="/film-info/:id" element={<FilmDetails />}/>
        </Route>
      </Routes>

    </>
  );
}

export default App;
