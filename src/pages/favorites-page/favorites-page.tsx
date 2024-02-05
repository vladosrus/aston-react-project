import { memo } from 'react';
import { Section } from '../../shared/ui/section/section';
import { PhotoList } from '../../widgets/photo-list/photo-list';
import { Photo } from '../../shared/api/unsplash-api';

const favoritesList: Photo[] = [
  {
    id: 'oZgWEeDxTio',
    width: 4672,
    height: 7008,
    description: '',
    alt_description: 'a group of jellyfish floating in the water',
    url: 'https://images.unsplash.com/photo-1704397443263-d7467ecb8b48?ixid=M3w1NTQ1MTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDcxNTgzMjV8&ixlib=rb-4.0.3'
  },
  {
    id: 'KrADIypZsKY',
    width: 2667,
    height: 4000,
    description: '',
    alt_description: 'a building that has a lot of decorations on it',
    url: 'https://images.unsplash.com/photo-1705977191523-79d85e34baf1?ixid=M3w1NTQ1MTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDcxNTgzMjV8&ixlib=rb-4.0.3'
  },
  {
    id: 'oxmeFmWSDno',
    width: 6048,
    height: 4024,
    description: '',
    alt_description: 'a person walking down a dark street at night',
    url: 'https://images.unsplash.com/photo-1706611500498-adcb9446aeda?ixid=M3w1NTQ1MTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDcxNTgzMjV8&ixlib=rb-4.0.3'
  }
];

const FavoritesPage = memo(() => {
  return (
    <>
      <Section type="top" />
      <Section type="main">
        {favoritesList.length ? (
          <PhotoList list={favoritesList} />
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
