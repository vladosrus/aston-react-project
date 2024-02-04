import { memo } from 'react';
import { Section } from '../../shared/ui/section/section';
import { PhotoList } from '../../widgets/photo-list/photo-list';
import { PhotoInfo } from '../home-page/home-page';

const favouritesList: PhotoInfo[] = [
  {
    id: 'Lz2taM_b0CQ',
    slug: 'a-white-flower-with-green-stems-on-a-white-surface-Lz2taM_b0CQ',
    created_at: '2024-01-25T16:23:53Z',
    updated_at: '2024-01-28T14:00:03Z',
    promoted_at: '2024-01-28T08:44:09Z',
    width: 2848,
    height: 4272,
    color: '#f3f3f3',
    blur_hash: 'LnK_E?~qjvt701NFxuj]juIUNFt7',
    description: 'White flower against a beige paper background in a sunny day',
    alt_description: 'a white flower with green stems on a white surface',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1706199405787-90ccfa160fa9?ixid=M3w1NTQ1MTF8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1706199405787-90ccfa160fa9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1706199405787-90ccfa160fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1706199405787-90ccfa160fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1706199405787-90ccfa160fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706199405787-90ccfa160fa9'
    },
    links: {
      self: 'https://api.unsplash.com/photos/a-white-flower-with-green-stems-on-a-white-surface-Lz2taM_b0CQ',
      html: 'https://unsplash.com/photos/a-white-flower-with-green-stems-on-a-white-surface-Lz2taM_b0CQ',
      download:
        'https://unsplash.com/photos/Lz2taM_b0CQ/download?ixid=M3w1NTQ1MTF8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNjQ1OTYxOXw',
      download_location:
        'https://api.unsplash.com/photos/Lz2taM_b0CQ/download?ixid=M3w1NTQ1MTF8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNjQ1OTYxOXw'
    },
    likes: 37,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: 'VCA9IfCfNMo',
      updated_at: '2024-01-28T08:47:08Z',
      username: 'responsiblecreatives',
      name: 'Keila Hötzel',
      first_name: 'Keila',
      last_name: 'Hötzel',
      twitter_username: 'keilahoetzel',
      portfolio_url: 'https://adobe.ly/3OJf1GB',
      bio: 'The german half of The Responsible Creatives, who enjoys shooting styled images and helping brands create their unique identity!  For more images visit our AdobeStock profile. ',
      location: 'Bayern, Germany',
      links: {
        self: 'https://api.unsplash.com/users/responsiblecreatives',
        html: 'https://unsplash.com/@responsiblecreatives',
        photos: 'https://api.unsplash.com/users/responsiblecreatives/photos',
        likes: 'https://api.unsplash.com/users/responsiblecreatives/likes',
        portfolio:
          'https://api.unsplash.com/users/responsiblecreatives/portfolio',
        following:
          'https://api.unsplash.com/users/responsiblecreatives/following',
        followers:
          'https://api.unsplash.com/users/responsiblecreatives/followers'
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1672753754051-1424c98f5935image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1672753754051-1424c98f5935image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1672753754051-1424c98f5935image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128'
      },
      instagram_username: 'responsiblecreatives',
      total_collections: 2,
      total_likes: 383,
      total_photos: 33,
      total_promoted_photos: 12,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: 'responsiblecreatives',
        portfolio_url: 'https://adobe.ly/3OJf1GB',
        twitter_username: 'keilahoetzel',
        paypal_email: null
      }
    }
  },
  {
    id: '8rQQBxAtvL4',
    slug: 'a-painting-of-a-colorful-bird-on-a-white-background-8rQQBxAtvL4',
    created_at: '2024-01-26T11:06:45Z',
    updated_at: '2024-01-28T09:11:54Z',
    promoted_at: '2024-01-28T08:40:56Z',
    width: 4370,
    height: 5669,
    color: '#a6260c',
    blur_hash: 'LLIgNAIaqZtTRhk=XUadvgX6XnSi',
    description:
      "' Urban Light' - a large abstract acryl painting on canvas with a lot of yellow, red and blue colors, which I painted in 2008 together with my artist friend Ben Vollers. Only after the common painting proces we named our work in words. This colorful dynamic painting is one of the c. 50 large paintings we created together: jamming with brushes and paint! Some call this fusion-art or jamming. This free art image is suitable for making large art prints, posters or wallpapers - Colorful art image in public domain CCO - free download, by Fons Heijnsbroek, Dutch painter artist of The Netherlands.",
    alt_description: 'a painting of a colorful bird on a white background',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1706266541244-89bfdd5ad021?ixid=M3w1NTQ1MTF8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1706266541244-89bfdd5ad021?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1706266541244-89bfdd5ad021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1706266541244-89bfdd5ad021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1706266541244-89bfdd5ad021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNjQ1OTYxOXw&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706266541244-89bfdd5ad021'
    },
    links: {
      self: 'https://api.unsplash.com/photos/a-painting-of-a-colorful-bird-on-a-white-background-8rQQBxAtvL4',
      html: 'https://unsplash.com/photos/a-painting-of-a-colorful-bird-on-a-white-background-8rQQBxAtvL4',
      download:
        'https://unsplash.com/photos/8rQQBxAtvL4/download?ixid=M3w1NTQ1MTF8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNjQ1OTYxOXw',
      download_location:
        'https://api.unsplash.com/photos/8rQQBxAtvL4/download?ixid=M3w1NTQ1MTF8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNjQ1OTYxOXw'
    },
    likes: 21,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      'textures-patterns': {
        status: 'unevaluated'
      },
      wallpapers: {
        status: 'unevaluated'
      }
    },
    user: {
      id: 'lGsjSEeF3XY',
      updated_at: '2024-01-28T16:22:19Z',
      username: 'heijnsbroek_abstract_art',
      name: 'Fons Heijnsbroek, abstract-art',
      first_name: 'Fons',
      last_name: 'Heijnsbroek, abstract-art',
      twitter_username: null,
      portfolio_url: 'https://heijnsbroek.exto.org/',
      bio: 'My abstract colorful paintings I made in 1985 - 2016. Here I share photos of my mainly abstract art in high resolution pictures, suitable for art print or wallpaper - free download & public domain art images CCO. I appreciate when you mention my name',
      location: 'Amsterdam, Netherlands, Holland',
      links: {
        self: 'https://api.unsplash.com/users/heijnsbroek_abstract_art',
        html: 'https://unsplash.com/@heijnsbroek_abstract_art',
        photos:
          'https://api.unsplash.com/users/heijnsbroek_abstract_art/photos',
        likes: 'https://api.unsplash.com/users/heijnsbroek_abstract_art/likes',
        portfolio:
          'https://api.unsplash.com/users/heijnsbroek_abstract_art/portfolio',
        following:
          'https://api.unsplash.com/users/heijnsbroek_abstract_art/following',
        followers:
          'https://api.unsplash.com/users/heijnsbroek_abstract_art/followers'
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1704709670831-27061c696054image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1704709670831-27061c696054image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1704709670831-27061c696054image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128'
      },
      instagram_username: 'heijnsbroekfons',
      total_collections: 4,
      total_likes: 420,
      total_photos: 88,
      total_promoted_photos: 7,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: 'heijnsbroekfons',
        portfolio_url: 'https://heijnsbroek.exto.org/',
        twitter_username: null,
        paypal_email: null
      }
    }
  },
  {
    id: 'v4j0rlrTZbc',
    slug: 'a-mountain-covered-in-snow-at-sunset-v4j0rlrTZbc',
    created_at: '2024-01-24T10:38:01Z',
    updated_at: '2024-01-28T14:00:03Z',
    promoted_at: '2024-01-28T08:40:50Z',
    width: 5184,
    height: 3456,
    color: '#0c2626',
    blur_hash: 'L^J?{G%0s.WV~Bs:j[azOZR-WXoe',
    description:
      'Sunrise hike across Bali to view the beautiful Mt. Batur in Bali, Indonesia.',
    alt_description: 'a mountain covered in snow at sunset',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1706088604350-f3c46951ee02?ixid=M3w1NTQ1MTF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDY0NTk2MTl8&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1706088604350-f3c46951ee02?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDY0NTk2MTl8&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1706088604350-f3c46951ee02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDY0NTk2MTl8&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1706088604350-f3c46951ee02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDY0NTk2MTl8&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1706088604350-f3c46951ee02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ1MTF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDY0NTk2MTl8&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706088604350-f3c46951ee02'
    },
    links: {
      self: 'https://api.unsplash.com/photos/a-mountain-covered-in-snow-at-sunset-v4j0rlrTZbc',
      html: 'https://unsplash.com/photos/a-mountain-covered-in-snow-at-sunset-v4j0rlrTZbc',
      download:
        'https://unsplash.com/photos/v4j0rlrTZbc/download?ixid=M3w1NTQ1MTF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDY0NTk2MTl8',
      download_location:
        'https://api.unsplash.com/photos/v4j0rlrTZbc/download?ixid=M3w1NTQ1MTF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDY0NTk2MTl8'
    },
    likes: 24,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: '-Mt89NUTYp0',
      updated_at: '2024-01-28T09:02:08Z',
      username: 'carltraw',
      name: 'Carl Raw',
      first_name: 'Carl',
      last_name: 'Raw',
      twitter_username: 'carltraw',
      portfolio_url: 'http://www.carlraw.co.uk',
      bio: "I'm a designer, photographer, content creator and image manipulator.",
      location: 'Liverpool',
      links: {
        self: 'https://api.unsplash.com/users/carltraw',
        html: 'https://unsplash.com/@carltraw',
        photos: 'https://api.unsplash.com/users/carltraw/photos',
        likes: 'https://api.unsplash.com/users/carltraw/likes',
        portfolio: 'https://api.unsplash.com/users/carltraw/portfolio',
        following: 'https://api.unsplash.com/users/carltraw/following',
        followers: 'https://api.unsplash.com/users/carltraw/followers'
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1659961233253-da31f215e037image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1659961233253-da31f215e037image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1659961233253-da31f215e037image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128'
      },
      instagram_username: 'rawimage.co.uk',
      total_collections: 0,
      total_likes: 238,
      total_photos: 65,
      total_promoted_photos: 19,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: 'rawimage.co.uk',
        portfolio_url: 'http://www.carlraw.co.uk',
        twitter_username: 'carltraw',
        paypal_email: null
      }
    }
  }
];

const FavoritesPage = memo(() => {
  return (
    <>
      <Section type="top" />
      <Section type="main">
        {favouritesList.length ? (
          <PhotoList list={favouritesList} />
        ) : (
          <h2>{'У Вашей ещё нет избранных фотографий :('}</h2>
        )}
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default FavoritesPage;