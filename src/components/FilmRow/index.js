import React from "react";
import { Link } from "react-router-dom";
const FilmRow = (props) => {
  return (
    <div>
      <div className="FilmRow">
        <img
          src={`https://image.tmdb.org/t/p/w780${props.poster_path}`}
          alt={`${props.title}film poster`}
        />
        <div className="film-summary">
          <h3>{props.title}</h3>
          <p>{props.release_date.substring(0, 4)}</p>
          <div className="actions">
            {props.fav ? (
              <button
                className="action"
                onClick={() => props.handleRemoveFavourite(props)}
              >
                <span className="material-icons">remove_from_queue</span>
              </button>
            ) : (
              <button
                className="action"
                onClick={() => props.handleAddFavourite(props)}
              >
                <span className="material-icons">add_to_queue</span>
              </button>
            )}
            <button>
              <Link
                to={`/films/${props.id}`}
                state={{
                  backdrop_path: props.backdrop_path,
                  poster_path: props.poster_path,
                  title: props.title,
                  overview: props.overview,
                }}
                className="action"
              >
                <span className="material-icons">read_more</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmRow;
