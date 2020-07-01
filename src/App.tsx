import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./assets/main.css";
import Movie from "./components/Movie";
import { useLatestMoviesQuery } from "./generated/graphql";

function App() {
  const { loading, error, data } = useLatestMoviesQuery();

  if (loading) return <div>Fetching data</div>;
  if (error) return <div>Error: {error}</div>;

  const movies = data?.movies!;

  return (
    <div className="App p-10">
      <div className="movies">
        <ul>
          {movies.map((m) => (
            <Movie key={m.id} movie={m} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
