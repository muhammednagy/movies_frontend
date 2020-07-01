import gql from "graphql-tag";

export const LATEST_MOVIES = gql`
  query LatestMovies {
    movies {
      id
      title
      description
      releaseDate
      duration
      imageUrl
      rating
    }
  }
`;

// export const SHOW_MOVIE = gql`
//   query ShowMovie {
//     movie(id: …) {
//       id
//       title
//       description
//       releaseDate
//       duration
//       imageUrl
//       rating
//       actors {
//         id
//         name
//         imageUrl
//       }
//     }
//   }
// `;
