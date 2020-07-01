import React from "react";
import { IMovie } from "../generated/graphql";

interface Props {
  movie: IMovie;
}

export default function Movie(props: Props) {
  const { movie } = props;

  return (
    <li className="mb-10">
      <div>
        <div>
          <img src={movie.imageUrl} alt="" width="80" height="60" />
          <h3>{movie.title}</h3>
        </div>
        <ul>
          <li>Release date: {movie.releaseDate}</li>
          <li>Duration: {movie.duration}</li>
        </ul>
        <p>{movie.description}</p>
        <a href="javascript:void(0)">More info…</a>
      </div>
    </li>
  );
}
