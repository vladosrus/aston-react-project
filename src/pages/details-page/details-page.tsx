import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Section } from '../../shared/ui/section/section';
import { PhotoDetails } from '../../widgets/photo-details/photo-details';
import { useGetPhotoByIdQuery } from '../../shared/api/unsplash-api';
import { Preloader } from '../../shared/ui/preloader/preloader';

export const DetailsPage = memo(() => {
  const { id } = useParams();
  const { data: photoInfo, isLoading } = useGetPhotoByIdQuery(id);

  return (
    <>
      <Section type="top" />
      <Section type="main">
        {isLoading ? <Preloader /> : <PhotoDetails photoInfo={photoInfo} />}
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default DetailsPage;
