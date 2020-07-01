import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};


export type IMovie = {
  __typename?: 'Movie';
  description: Scalars['String'];
  duration: Scalars['Int'];
  /** Movie primary key */
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  rating: Scalars['Float'];
  releaseDate: Scalars['ISO8601DateTime'];
  title: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type IQuery = {
  __typename?: 'Query';
  /** List of available movies */
  movies: Array<IMovie>;
};

export type ILatestMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type ILatestMoviesQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string, title: string, description: string, releaseDate: any, duration: number, imageUrl: string, rating: number }> };


export const LatestMoviesDocument = gql`
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
export type LatestMoviesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ILatestMoviesQuery, ILatestMoviesQueryVariables>, 'query'>;

    export const LatestMoviesComponent = (props: LatestMoviesComponentProps) => (
      <ApolloReactComponents.Query<ILatestMoviesQuery, ILatestMoviesQueryVariables> query={LatestMoviesDocument} {...props} />
    );
    
export type ILatestMoviesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ILatestMoviesQuery, ILatestMoviesQueryVariables>
    } & TChildProps;
export function withLatestMovies<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ILatestMoviesQuery,
  ILatestMoviesQueryVariables,
  ILatestMoviesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ILatestMoviesQuery, ILatestMoviesQueryVariables, ILatestMoviesProps<TChildProps, TDataName>>(LatestMoviesDocument, {
      alias: 'latestMovies',
      ...operationOptions
    });
};

/**
 * __useLatestMoviesQuery__
 *
 * To run a query within a React component, call `useLatestMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLatestMoviesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ILatestMoviesQuery, ILatestMoviesQueryVariables>) {
        return ApolloReactHooks.useQuery<ILatestMoviesQuery, ILatestMoviesQueryVariables>(LatestMoviesDocument, baseOptions);
      }
export function useLatestMoviesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ILatestMoviesQuery, ILatestMoviesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ILatestMoviesQuery, ILatestMoviesQueryVariables>(LatestMoviesDocument, baseOptions);
        }
export type LatestMoviesQueryHookResult = ReturnType<typeof useLatestMoviesQuery>;
export type LatestMoviesLazyQueryHookResult = ReturnType<typeof useLatestMoviesLazyQuery>;
export type LatestMoviesQueryResult = ApolloReactCommon.QueryResult<ILatestMoviesQuery, ILatestMoviesQueryVariables>;