import { memo } from 'react';
import { SearchForm } from '../../widgets/search-form/search-form';
import { Section } from '../../shared/ui/section/section';
import { PhotoList } from '../../widgets/photo-list/photo-list';

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
  description: string | null;
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
  user: object;
}
const list: PhotoInfo[] = [
  {
    id: 'vYhPMtsQtOI',
    slug: 'a-small-waterfall-in-the-middle-of-a-forest-vYhPMtsQtOI',
    created_at: '2024-01-27T00:00:51Z',
    updated_at: '2024-01-28T08:42:41Z',
    promoted_at: '2024-01-28T08:42:41Z',
    width: 5464,
    height: 6830,
    color: '#26260c',
    blur_hash: 'L67nUS-;4TjI-pxu-;?vxb%M?b%2',
    description: null,
    alt_description: 'a small waterfall in the middle of a forest',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1706313293815-545e6da761be?ixid=M3w1NTQ1MTF8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1706313293815-545e6da761be?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1706313293815-545e6da761be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1706313293815-545e6da761be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1706313293815-545e6da761be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706313293815-545e6da761be'
    },
    links: {
      self: 'https://api.unsplash.com/photos/a-small-waterfall-in-the-middle-of-a-forest-vYhPMtsQtOI',
      html: 'https://unsplash.com/photos/a-small-waterfall-in-the-middle-of-a-forest-vYhPMtsQtOI',
      download:
        'https://unsplash.com/photos/vYhPMtsQtOI/download?ixid=M3w1NTQ1MTF8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNjQ1OTYxOXw',
      download_location:
        'https://api.unsplash.com/photos/vYhPMtsQtOI/download?ixid=M3w1NTQ1MTF8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNjQ1OTYxOXw'
    },
    likes: 30,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: 'SJ2_XzVF3D0',
      updated_at: '2024-01-28T16:32:20Z',
      username: 'ericmuhr',
      name: 'Eric Muhr',
      first_name: 'Eric',
      last_name: 'Muhr',
      twitter_username: 'ericmuhr',
      portfolio_url: 'https://linktr.ee/ericmuhr',
      bio: 'PNW fine art photography | he/him | Prints and originals available | Founder of @oregonexplored',
      location: 'Portland, OR ',
      links: {
        self: 'https://api.unsplash.com/users/ericmuhr',
        html: 'https://unsplash.com/@ericmuhr',
        photos: 'https://api.unsplash.com/users/ericmuhr/photos',
        likes: 'https://api.unsplash.com/users/ericmuhr/likes',
        portfolio: 'https://api.unsplash.com/users/ericmuhr/portfolio',
        following: 'https://api.unsplash.com/users/ericmuhr/following',
        followers: 'https://api.unsplash.com/users/ericmuhr/followers'
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1617394472428-308356931ad4image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1617394472428-308356931ad4image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1617394472428-308356931ad4image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128'
      },
      instagram_username: 'ericmuhr',
      total_collections: 15,
      total_likes: 1587,
      total_photos: 411,
      total_promoted_photos: 223,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: 'ericmuhr',
        portfolio_url: 'https://linktr.ee/ericmuhr',
        twitter_username: 'ericmuhr',
        paypal_email: null
      }
    }
  },
  {
    id: 'igw-14UnNjg',
    slug: 'a-couple-of-people-that-are-walking-in-the-dirt-igw-14UnNjg',
    created_at: '2023-04-28T15:30:26Z',
    updated_at: '2024-01-22T00:15:38Z',
    promoted_at: '2023-05-17T09:52:47Z',
    width: 9504,
    height: 6336,
    color: '#c0a68c',
    blur_hash: 'LLJ@dv4oN{%M0g9aoI-o}=NGIUx]',
    description:
      'A beautiful and ancient spring fed canyon which weaves its way through 400-meter-tall towers of granite, sandstone and basalt, before plunging into the Gulf of Aqaba | Shiʻb Mūsá – NEOM, Saudi Arabia.',
    alt_description: 'a couple of people that are walking in the dirt',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1682695795557-17447f921f79?ixid=M3w1NTQ1MTF8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1682695795557-17447f921f79?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTQ1MTF8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1682695795557-17447f921f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1682695795557-17447f921f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1682695795557-17447f921f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682695795557-17447f921f79'
    },
    links: {
      self: 'https://api.unsplash.com/photos/a-couple-of-people-that-are-walking-in-the-dirt-igw-14UnNjg',
      html: 'https://unsplash.com/photos/a-couple-of-people-that-are-walking-in-the-dirt-igw-14UnNjg',
      download:
        'https://unsplash.com/photos/igw-14UnNjg/download?ixid=M3w1NTQ1MTF8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNjQ1OTYxOXw',
      download_location:
        'https://api.unsplash.com/photos/igw-14UnNjg/download?ixid=M3w1NTQ1MTF8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNjQ1OTYxOXw'
    },
    likes: 250,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [
        'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515591&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
        'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515794&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif'
      ],
      tagline: 'Made to Change',
      tagline_url:
        'https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral',
      sponsor: {
        id: 'mYizSrdJkkU',
        updated_at: '2024-01-27T21:36:45Z',
        username: 'neom',
        name: 'NEOM',
        first_name: 'NEOM',
        last_name: null,
        twitter_username: 'neom',
        portfolio_url: 'http://www.neom.com',
        bio: 'Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.',
        location: 'NEOM, Saudi Arabia',
        links: {
          self: 'https://api.unsplash.com/users/neom',
          html: 'https://unsplash.com/@neom',
          photos: 'https://api.unsplash.com/users/neom/photos',
          likes: 'https://api.unsplash.com/users/neom/likes',
          portfolio: 'https://api.unsplash.com/users/neom/portfolio',
          following: 'https://api.unsplash.com/users/neom/following',
          followers: 'https://api.unsplash.com/users/neom/followers'
        },
        profile_image: {
          small:
            'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
          medium:
            'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
          large:
            'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128'
        },
        instagram_username: 'discoverneom',
        total_collections: 7,
        total_likes: 1,
        total_photos: 202,
        total_promoted_photos: 72,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: 'discoverneom',
          portfolio_url: 'http://www.neom.com',
          twitter_username: 'neom',
          paypal_email: null
        }
      }
    },
    topic_submissions: {},
    user: {
      id: 'mYizSrdJkkU',
      updated_at: '2024-01-27T21:36:45Z',
      username: 'neom',
      name: 'NEOM',
      first_name: 'NEOM',
      last_name: null,
      twitter_username: 'neom',
      portfolio_url: 'http://www.neom.com',
      bio: 'Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.',
      location: 'NEOM, Saudi Arabia',
      links: {
        self: 'https://api.unsplash.com/users/neom',
        html: 'https://unsplash.com/@neom',
        photos: 'https://api.unsplash.com/users/neom/photos',
        likes: 'https://api.unsplash.com/users/neom/likes',
        portfolio: 'https://api.unsplash.com/users/neom/portfolio',
        following: 'https://api.unsplash.com/users/neom/following',
        followers: 'https://api.unsplash.com/users/neom/followers'
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128'
      },
      instagram_username: 'discoverneom',
      total_collections: 7,
      total_likes: 1,
      total_photos: 202,
      total_promoted_photos: 72,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: 'discoverneom',
        portfolio_url: 'http://www.neom.com',
        twitter_username: 'neom',
        paypal_email: null
      }
    }
  }
];

const SearchPage = memo(() => {
  return (
    <>
      <Section type="top">
        <SearchForm />
      </Section>
      <Section type="main">
        {list.length ? (
          <PhotoList list={list} />
        ) : (
          <h2>{'По вашему запросу ничего не нашлось :('}</h2>
        )}
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default SearchPage;
