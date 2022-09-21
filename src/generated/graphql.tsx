import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type MoviesEntity = {
  __typename?: 'MoviesEntity';
  /** жанры */
  genres: Array<Scalars['String']>;
  /** id на tmdb */
  id: Scalars['Float'];
  /** краткое описание */
  overview: Scalars['String'];
  /** дата выхода */
  release_date: Scalars['String'];
  /** кадры */
  screens: Array<Scalars['String']>;
  /** название фильма */
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserEntity;
  updateUser: UserEntity;
};


export type MutationCreateUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInputType;
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getUser: UserEntity;
  getUserByVk: UserEntity;
  popular: Array<MoviesEntity>;
};


export type QueryGetUserArgs = {
  id: Scalars['String'];
};


export type QueryGetUserByVkArgs = {
  id: Scalars['Int'];
};

export type UpdateUserInputType = {
  disliked?: InputMaybe<Array<Scalars['Int']>>;
  liked?: InputMaybe<Array<Scalars['Int']>>;
  saved?: InputMaybe<Array<Scalars['Int']>>;
  skipped?: InputMaybe<Array<Scalars['Int']>>;
  willBeShown?: InputMaybe<Array<Scalars['Int']>>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  disliked: Array<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  liked: Array<Scalars['Int']>;
  saved: Array<Scalars['Int']>;
  skipped: Array<Scalars['Int']>;
  vk_user_id: Scalars['Int'];
  willBeShown: Array<Scalars['Int']>;
};

export type GetMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesQuery = { __typename?: 'Query', popular: Array<{ __typename?: 'MoviesEntity', id: number, title: string, overview: string, screens: Array<string>, release_date: string }> };

export type GetUserByVkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserByVkQuery = { __typename?: 'Query', getUserByVk: { __typename?: 'UserEntity', id?: string | null, vk_user_id: number, liked: Array<number>, disliked: Array<number> } };


export const GetMoviesDocument = gql`
    query GetMovies {
  popular {
    id
    title
    overview
    screens
    release_date
  }
}
    `;

/**
 * __useGetMoviesQuery__
 *
 * To run a query within a React component, call `useGetMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
      }
export function useGetMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
        }
export type GetMoviesQueryHookResult = ReturnType<typeof useGetMoviesQuery>;
export type GetMoviesLazyQueryHookResult = ReturnType<typeof useGetMoviesLazyQuery>;
export type GetMoviesQueryResult = Apollo.QueryResult<GetMoviesQuery, GetMoviesQueryVariables>;
export const GetUserByVkDocument = gql`
    query GetUserByVK($id: Int!) {
  getUserByVk(id: $id) {
    id
    vk_user_id
    liked
    disliked
  }
}
    `;

/**
 * __useGetUserByVkQuery__
 *
 * To run a query within a React component, call `useGetUserByVkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByVkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByVkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByVkQuery(baseOptions: Apollo.QueryHookOptions<GetUserByVkQuery, GetUserByVkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByVkQuery, GetUserByVkQueryVariables>(GetUserByVkDocument, options);
      }
export function useGetUserByVkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByVkQuery, GetUserByVkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByVkQuery, GetUserByVkQueryVariables>(GetUserByVkDocument, options);
        }
export type GetUserByVkQueryHookResult = ReturnType<typeof useGetUserByVkQuery>;
export type GetUserByVkLazyQueryHookResult = ReturnType<typeof useGetUserByVkLazyQuery>;
export type GetUserByVkQueryResult = Apollo.QueryResult<GetUserByVkQuery, GetUserByVkQueryVariables>;