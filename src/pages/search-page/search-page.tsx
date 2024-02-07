import { memo } from 'react';
import { SearchForm } from '../../widgets/search-form/search-form';
import { Section } from '../../shared/ui/section/section';
import { PhotoList } from '../../widgets/photo-list/photo-list';
import { Photo } from '../../shared/api/unsplash-api';

const list: Photo[] = [
  {
    id: '6CRREj0PZL0',
    width: 4866,
    height: 3041,
    description: '',
    alt_description: 'a bird sitting on a branch with a worm in its mouth',
    url: 'https://images.unsplash.com/photo-1694013018516-afd7bc03253e?ixid=M3w1NTQ1MTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDcxNTgzMjV8&ixlib=rb-4.0.3'
  },
  {
    id: 'chiFm1wGst8',
    width: 2692,
    height: 3582,
    description:
      'Title: 1960P17 Ponte Cannareggio, Venice, Italy Description: 1960P17 Ponte Cannareggio, Venice, Italy, 1937 By Joseph Edward Southall (d.1944) Keywords: Boat, Birmingham Museums Trust/Birmingham Museum & Art Gallery, Architecture, Canal, Cityscape, Bridge, Italy/Venice https://dams.birminghammuseums.org.uk/asset-bank/action/viewAsset?id=4372',
    alt_description: 'a painting of a city with a bridge over a river',
    url: 'https://images.unsplash.com/photo-1698941744394-841a5eb19ec3?ixid=M3w1NTQ1MTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDcxNTgzMjV8&ixlib=rb-4.0.3'
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
          <PhotoList photoList={list} />
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
