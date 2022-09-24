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
  pushMovie: UserEntity;
  updateGenres: UserEntity;
  updateUser: UserEntity;
};


export type MutationCreateUserArgs = {
  id: Scalars['Int'];
};


export type MutationPushMovieArgs = {
  id: Scalars['String'];
  movieId: Scalars['Int'];
  to: PushMovieToType;
};


export type MutationUpdateGenresArgs = {
  genres: Array<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInputType;
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getGenreList: Array<Scalars['String']>;
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
  favourite_genres: Array<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  liked: Array<Scalars['Int']>;
  saved: Array<Scalars['Int']>;
  skipped: Array<Scalars['Int']>;
  vk_user_id: Scalars['Int'];
};

export enum PushMovieToType {
  Disliked = 'disliked',
  Liked = 'liked',
  Saved = 'saved',
  Skipped = 'skipped'
}

export type SignupUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SignupUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserEntity', id?: string | null } };

export type SwipeHandlerMutationVariables = Exact<{
  id: Scalars['String'];
  to: PushMovieToType;
  movieId: Scalars['Int'];
}>;


export type SwipeHandlerMutation = { __typename?: 'Mutation', pushMovie: { __typename?: 'UserEntity', id?: string | null } };

export type UpdateGenresMutationVariables = Exact<{
  id: Scalars['String'];
  genres: Array<Scalars['String']> | Scalars['String'];
}>;


export type UpdateGenresMutation = { __typename?: 'Mutation', updateGenres: { __typename?: 'UserEntity', favourite_genres: Array<string> } };

export type GetGenreListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGenreListQuery = { __typename?: 'Query', getGenreList: Array<string> };

export type GetMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesQuery = { __typename?: 'Query', popular: Array<{ __typename?: 'MoviesEntity', id: number, title: string, overview: string, screens: Array<string>, release_date: string }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'UserEntity', liked: Array<number>, disliked: Array<number>, vk_user_id: number, skipped: Array<number>, saved: Array<number>, favourite_genres: Array<string>, id?: string | null } };

export type GetUserByVkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserByVkQuery = { __typename?: 'Query', getUserByVk: { __typename?: 'UserEntity', id?: string | null, vk_user_id: number, liked: Array<number>, disliked: Array<number> } };


export const SignupUserDocument = gql`
    mutation SignupUser($id: Int!) {
  createUser(id: $id) {
    id
  }
}
    `;
export type SignupUserMutationFn = Apollo.MutationFunction<SignupUserMutation, SignupUserMutationVariables>;

/**
 * __useSignupUserMutation__
 *
 * To run a mutation, you first call `useSignupUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupUserMutation, { data, loading, error }] = useSignupUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSignupUserMutation(baseOptions?: Apollo.MutationHookOptions<SignupUserMutation, SignupUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupUserMutation, SignupUserMutationVariables>(SignupUserDocument, options);
      }
export type SignupUserMutationHookResult = ReturnType<typeof useSignupUserMutation>;
export type SignupUserMutationResult = Apollo.MutationResult<SignupUserMutation>;
export type SignupUserMutationOptions = Apollo.BaseMutationOptions<SignupUserMutation, SignupUserMutationVariables>;
export const SwipeHandlerDocument = gql`
    mutation SwipeHandler($id: String!, $to: pushMovieToType!, $movieId: Int!) {
  pushMovie(id: $id, to: $to, movieId: $movieId) {
    id
  }
}
    `;
export type SwipeHandlerMutationFn = Apollo.MutationFunction<SwipeHandlerMutation, SwipeHandlerMutationVariables>;

/**
 * __useSwipeHandlerMutation__
 *
 * To run a mutation, you first call `useSwipeHandlerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSwipeHandlerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [swipeHandlerMutation, { data, loading, error }] = useSwipeHandlerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      to: // value for 'to'
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useSwipeHandlerMutation(baseOptions?: Apollo.MutationHookOptions<SwipeHandlerMutation, SwipeHandlerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SwipeHandlerMutation, SwipeHandlerMutationVariables>(SwipeHandlerDocument, options);
      }
export type SwipeHandlerMutationHookResult = ReturnType<typeof useSwipeHandlerMutation>;
export type SwipeHandlerMutationResult = Apollo.MutationResult<SwipeHandlerMutation>;
export type SwipeHandlerMutationOptions = Apollo.BaseMutationOptions<SwipeHandlerMutation, SwipeHandlerMutationVariables>;
export const UpdateGenresDocument = gql`
    mutation UpdateGenres($id: String!, $genres: [String!]!) {
  updateGenres(id: $id, genres: $genres) {
    favourite_genres
  }
}
    `;
export type UpdateGenresMutationFn = Apollo.MutationFunction<UpdateGenresMutation, UpdateGenresMutationVariables>;

/**
 * __useUpdateGenresMutation__
 *
 * To run a mutation, you first call `useUpdateGenresMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGenresMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGenresMutation, { data, loading, error }] = useUpdateGenresMutation({
 *   variables: {
 *      id: // value for 'id'
 *      genres: // value for 'genres'
 *   },
 * });
 */
export function useUpdateGenresMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGenresMutation, UpdateGenresMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGenresMutation, UpdateGenresMutationVariables>(UpdateGenresDocument, options);
      }
export type UpdateGenresMutationHookResult = ReturnType<typeof useUpdateGenresMutation>;
export type UpdateGenresMutationResult = Apollo.MutationResult<UpdateGenresMutation>;
export type UpdateGenresMutationOptions = Apollo.BaseMutationOptions<UpdateGenresMutation, UpdateGenresMutationVariables>;
export const GetGenreListDocument = gql`
    query GetGenreList {
  getGenreList
}
    `;

/**
 * __useGetGenreListQuery__
 *
 * To run a query within a React component, call `useGetGenreListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenreListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenreListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGenreListQuery(baseOptions?: Apollo.QueryHookOptions<GetGenreListQuery, GetGenreListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenreListQuery, GetGenreListQueryVariables>(GetGenreListDocument, options);
      }
export function useGetGenreListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenreListQuery, GetGenreListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenreListQuery, GetGenreListQueryVariables>(GetGenreListDocument, options);
        }
export type GetGenreListQueryHookResult = ReturnType<typeof useGetGenreListQuery>;
export type GetGenreListLazyQueryHookResult = ReturnType<typeof useGetGenreListLazyQuery>;
export type GetGenreListQueryResult = Apollo.QueryResult<GetGenreListQuery, GetGenreListQueryVariables>;
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
export const GetUserDocument = gql`
    query GetUser($id: String!) {
  getUser(id: $id) {
    liked
    disliked
    vk_user_id
    skipped
    saved
    favourite_genres
    id
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
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