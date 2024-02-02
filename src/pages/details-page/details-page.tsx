import { memo } from 'react';
import { Section } from '../../shared/ui/section/section';
import { PhotoDetails } from '../../widgets/photo-details/photo-details';

export interface PhotoInfo {
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
  links: object;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: [];
  sponsorship: null;
  topic_submissions: object;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string | null;
    bio: string;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: object;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: object;
  };
}
const photoInfo: PhotoInfo = {
  id: 'E1GohE8FtCI',
  slug: 'a-green-and-white-aurora-bore-above-a-mountain-E1GohE8FtCI',
  created_at: '2024-01-29T17:01:57Z',
  updated_at: '2024-02-02T07:34:22Z',
  promoted_at: '2024-02-02T07:34:22Z',
  width: 3840,
  height: 2160,
  color: '#c0c0c0',
  blur_hash: 'LTEMwLkCDjo|O:a{Mxo{0JfR%Mf*',
  description: 'Norther Lights',
  alt_description: 'a green and white aurora bore above a mountain',
  breadcrumbs: [],
  urls: {
    raw: 'https://images.unsplash.com/photo-1706547661184-148ac33badcd?ixid=M3w1NTQ1MTF8MHwxfGFsbHx8fHx8fHx8fDE3MDY4Njk3MTV8&ixlib=rb-4.0.3',
    full: 'https://images.unsplash.com/photo-1706547661184-148ac33badcd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHx8fHx8fHx8fDE3MDY4Njk3MTV8&ixlib=rb-4.0.3&q=85',
    regular:
      'https://images.unsplash.com/photo-1706547661184-148ac33badcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHx8fHx8fHx8fDE3MDY4Njk3MTV8&ixlib=rb-4.0.3&q=80&w=1080',
    small:
      'https://images.unsplash.com/photo-1706547661184-148ac33badcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHx8fHx8fHx8fDE3MDY4Njk3MTV8&ixlib=rb-4.0.3&q=80&w=400',
    thumb:
      'https://images.unsplash.com/photo-1706547661184-148ac33badcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHx8fHx8fHx8fDE3MDY4Njk3MTV8&ixlib=rb-4.0.3&q=80&w=200',
    small_s3:
      'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706547661184-148ac33badcd'
  },
  links: {
    self: 'https://api.unsplash.com/photos/a-green-and-white-aurora-bore-above-a-mountain-E1GohE8FtCI',
    html: 'https://unsplash.com/photos/a-green-and-white-aurora-bore-above-a-mountain-E1GohE8FtCI',
    download:
      'https://unsplash.com/photos/E1GohE8FtCI/download?ixid=M3w1NTQ1MTF8MHwxfGFsbHx8fHx8fHx8fDE3MDY4Njk3MTV8',
    download_location:
      'https://api.unsplash.com/photos/E1GohE8FtCI/download?ixid=M3w1NTQ1MTF8MHwxfGFsbHx8fHx8fHx8fDE3MDY4Njk3MTV8'
  },
  likes: 6,
  liked_by_user: false,
  current_user_collections: [],
  sponsorship: null,
  topic_submissions: {},
  user: {
    id: 'dg4S8j5TzmE',
    updated_at: '2024-02-02T07:34:22Z',
    username: 'karsten116',
    name: 'Karsten Winegeart',
    first_name: 'Karsten',
    last_name: 'Winegeart',
    twitter_username: 'karsten116',
    portfolio_url: null,
    bio: 'IG - @karsten116',
    location: 'Austin Texas',
    links: {
      self: 'https://api.unsplash.com/users/karsten116',
      html: 'https://unsplash.com/@karsten116',
      photos: 'https://api.unsplash.com/users/karsten116/photos',
      likes: 'https://api.unsplash.com/users/karsten116/likes',
      portfolio: 'https://api.unsplash.com/users/karsten116/portfolio',
      following: 'https://api.unsplash.com/users/karsten116/following',
      followers: 'https://api.unsplash.com/users/karsten116/followers'
    },
    profile_image: {
      small:
        'https://images.unsplash.com/profile-1583427783052-3da8ceab5579image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
      medium:
        'https://images.unsplash.com/profile-1583427783052-3da8ceab5579image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
      large:
        'https://images.unsplash.com/profile-1583427783052-3da8ceab5579image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128'
    },
    instagram_username: 'karsten116',
    total_collections: 1,
    total_likes: 798,
    total_photos: 898,
    total_promoted_photos: 518,
    accepted_tos: true,
    for_hire: true,
    social: {
      instagram_username: 'karsten116',
      portfolio_url: null,
      twitter_username: 'karsten116',
      paypal_email: null
    }
  }
};

export const DetailsPage = memo(() => {
  return (
    <>
      <Section type="top" />
      <Section type="main">
        <PhotoDetails photoInfo={photoInfo} />
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default DetailsPage;
