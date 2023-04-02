import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmLibrary from "../FilmLibrary";
import Home from "../Home";
import FilmDetail from "../FilmDetail";
import PageNotFound from "../404/PageNotFound";

function App() {
  const [faves, setFaves] = useState([]); //push here if favourited.
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route
            path="films"
            element={<FilmLibrary {...{ faves, setFaves }} />}
          >
            <Route path=":filmId" element={<FilmDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/*
import FilmLibrary from '../FilmLibrary';

function App() {
  return (
    <FilmLibrary/>
  );
}

export default App;
*/
