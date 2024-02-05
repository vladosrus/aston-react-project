import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
          count: 30
        }
      }),
      transformResponse: (res: rawUnsplashData[]) =>
        res.map((photo: rawUnsplashData) => {
          return {
            id: photo.id,
            width: photo.width,
            height: photo.height,
            description: photo.description || '',
            alt_description: photo.alt_description || '',
            url: photo.urls.raw
          };
        })
    }),
    getPhotoById: build.query<FullPhotoInfo, string | undefined>({
      query: (id) => ({
        url: `/photos/${id}`
      }),
      transformResponse: (res: rawUnsplashData) => {
        return {
          id: res.id,
          width: res.width,
          height: res.height,
          description: res.description || '',
          alt_description: res.alt_description || '',
          url: res.urls.raw,
          creator: {
            name: res.user.name,
            profileName: res.user.username,
            profileLink: res.user.links.html,
            country: res.user.location
          }
        };
      }
    })
  })
});

export const { useGetInitialPhotosQuery, useGetPhotoByIdQuery } = unsplashApi;

interface rawUnsplashData {
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
