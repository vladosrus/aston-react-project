import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  transformInitialPhotos,
  transformPhotoById,
  transformPhotosByQuery
} from '../lib/transform-responses';

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({
    method: 'GET',
    baseUrl: import.meta.env.VITE_UNSPLASH_BASE_URL,
    headers: {
      Authorization: import.meta.env.VITE_UNSPLASH_AUTH_KEY
    }
  }),
  endpoints: (build) => ({
    getInitialPhotos: build.query<Photo[], void>({
      query: () => ({
        url: '/photos/random',
        params: {
          count: 10
        }
      }),
      transformResponse: transformInitialPhotos
    }),
    getPhotoById: build.query<FullPhotoInfo, string | undefined>({
      query: (id) => ({
        url: `/photos/${id}`
      }),
      transformResponse: transformPhotoById
    }),
    getPhotosByQuery: build.query<Photo[], string | undefined>({
      query: (query) => ({
        url: `/search/photos`,
        params: {
          query: query
        }
      }),
      transformResponse: transformPhotosByQuery
    })
  })
});

export const {
  useGetInitialPhotosQuery,
  useGetPhotoByIdQuery,
  useGetPhotosByQueryQuery
} = unsplashApi;

export interface RawUnsplashData {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: [];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: [];
  sponsorship: object | null;
  topic_submissions: object;
  user: {
    name: string;
    username: string;
    links: {
      html: string;
    };
    location: string;
  };
  tags: [];
}

export interface Photo {
  id: string;
  width: number;
  height: number;
  description: string;
  alt_description: string;
  url: string;
}

export interface FullPhotoInfo extends Photo {
  creator: {
    name: string;
    profileName: string;
    profileLink: string;
    country: string;
  };
}
