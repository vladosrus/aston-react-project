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
          count: 10
        }
      }),
      transformResponse: (res: RawUnsplashData[]) =>
        res.map((photo: RawUnsplashData) => {
          return {
            id: photo.id,
            width: photo.width,
            height: photo.height,
            description: photo.description || '',
            alt_description: photo.alt_description || '',
            url: photo.urls.regular
          };
        })
    }),
    getPhotoById: build.query<FullPhotoInfo, string | undefined>({
      query: (id) => ({
        url: `/photos/${id}`
      }),
      transformResponse: (photoInfo: RawUnsplashData) => {
        return {
          id: photoInfo.id,
          width: photoInfo.width,
          height: photoInfo.height,
          description: photoInfo.description || '',
          alt_description: photoInfo.alt_description || '',
          url: photoInfo.urls.raw,
          creator: {
            name: photoInfo.user.name,
            profileName: photoInfo.user.username,
            profileLink: photoInfo.user.links.html,
            country: photoInfo.user.location
          }
        };
      }
    }),
    getPhotoByQuery: build.query<Photo[], string | undefined>({
      query: (query) => ({
        url: `/search/photos`,
        params: {
          query: query
        }
      }),
      transformResponse: (res: SearchUnsplashData) => {
        return res.results.map((photo) => {
          return {
            id: photo.id,
            width: photo.width,
            height: photo.height,
            description: photo.description || '',
            alt_description: photo.alt_description || '',
            url: photo.urls.regular
          };
        });
      }
    })
  })
});

export const {
  useGetInitialPhotosQuery,
  useGetPhotoByIdQuery,
  useGetPhotoByQueryQuery
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
interface SearchUnsplashData {
  total: number;
  total_pages: number;
  results: RawUnsplashData[];
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
