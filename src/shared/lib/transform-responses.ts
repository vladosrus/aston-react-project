import type { Photo, RawUnsplashData } from '../api/unsplash-api';

interface SearchUnsplashData {
  total: number;
  total_pages: number;
  results: RawUnsplashData[];
}

export const transformInitialPhotos = (res: RawUnsplashData[]) =>
  res.map((photo: RawUnsplashData) => {
    return {
      id: photo.id,
      width: photo.width,
      height: photo.height,
      description: photo.description || '',
      alt_description: photo.alt_description || '',
      url: photo.urls.regular
    };
  });
export const transformPhotoById = (photoInfo: RawUnsplashData) => {
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
};
export const transformPhotosByQuery = (res: SearchUnsplashData): Photo[] => {
  return res.results.map((photo) => {
    return {
      id: photo.id,
      width: photo.width,
      height: photo.height,
      description: photo.description || '',
      alt_description: photo.alt_description || '',
      url: photo.urls.small
    };
  });
};
