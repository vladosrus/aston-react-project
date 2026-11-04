import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  transformInitialPhotos,
  transformPhotoById,
  transformPhotosByQuery,
  transformSuggestions
} from '../lib/transform-responses';

export const PHOTOS_PER_PAGE = 10;

// Unsplash может вернуть уже показанное фото (особенно /photos/random),
// а дубли ломают key в списке
const mergeUniquePhotos = (current: Photo[], incoming: Photo[]) => {
  const ids = new Set(current.map((photo) => photo.id));
  return [...current, ...incoming.filter((photo) => !ids.has(photo.id))];
};

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
    // Аргумент — номер "страницы". Все страницы хранятся в одной записи кэша,
    // новые фото дописываются в конец списка
    getInitialPhotos: build.query<Photo[], number>({
      query: () => ({
        url: '/photos/random',
        params: { count: PHOTOS_PER_PAGE }
      }),
      transformResponse: transformInitialPhotos,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newPhotos, { arg: page }) =>
        page === 1 ? newPhotos : mergeUniquePhotos(currentCache, newPhotos),
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg
    }),
    getPhotoById: build.query<FullPhotoInfo, string | undefined>({
      query: (id) => ({
        url: `/photos/${id}`
      }),
      transformResponse: transformPhotoById
    }),
    // Отдельный эндпоинт, чтобы подсказки не сбрасывали подгруженные страницы
    // в кэше getPhotosByQuery для того же запроса
    getSuggestionsByQuery: build.query<Photo[], string>({
      query: (query) => ({
        url: `/search/photos`,
        params: { query, per_page: PHOTOS_PER_PAGE }
      }),
      transformResponse: transformSuggestions
    }),
    // Для каждого поискового запроса — своя запись кэша, страницы склеиваются
    getPhotosByQuery: build.query<PhotosByQuery, PhotosByQueryArgs>({
      query: ({ query, page }) => ({
        url: `/search/photos`,
        params: { query, page, per_page: PHOTOS_PER_PAGE }
      }),
      transformResponse: transformPhotosByQuery,
      serializeQueryArgs: ({ endpointName, queryArgs }) =>
        `${endpointName}(${queryArgs.query})`,
      merge: (currentCache, newData, { arg }) =>
        arg.page === 1
          ? newData
          : {
              photos: mergeUniquePhotos(currentCache.photos, newData.photos),
              totalPages: newData.totalPages
            },
      forceRefetch: ({ currentArg, previousArg }) =>
        currentArg?.query !== previousArg?.query ||
        currentArg?.page !== previousArg?.page
    })
  })
});

export const {
  useGetInitialPhotosQuery,
  useGetPhotoByIdQuery,
  useGetPhotosByQueryQuery,
  useGetSuggestionsByQueryQuery
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

export interface PhotosByQuery {
  photos: Photo[];
  totalPages: number;
}

export interface PhotosByQueryArgs {
  query: string;
  page: number;
}

export interface FullPhotoInfo extends Photo {
  creator: {
    name: string;
    profileName: string;
    profileLink: string;
    country: string;
  };
}
