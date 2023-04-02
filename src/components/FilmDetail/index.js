import "./FilmDetail.css";
import { useLocation } from "react-router-dom";

function FilmDetail() {
  const location = useLocation();

  return (
    <>
      {location.state ? (
        <div className="FilmDetail is-hydrated">
          <figure className="film-backdrop">
            <img
              src={`https://image.tmdb.org/t/p/w1280${location.state.backdrop_path}`}
              alt={location.state.title}
            />
            <h1 className="film-title">{location.state.title}</h1>
          </figure>
          <div className="film-meta">
            <p className="film-detail-overview">
              <img
                src={`https://image.tmdb.org/t/p/w780${location.state.poster_path}`}
                className="film-detail-poster"
                alt={location.state.title}
              />
              {location.state.overview}
            </p>
          </div>
        </div>
      ) : (
        <div className="FilmDetail">
          <p>
            <i className="material-icons">subscriptions</i>
            <span>No film selected</span>
          </p>
        </div>
      )}
    </>
  );
}

export default FilmDetail;
