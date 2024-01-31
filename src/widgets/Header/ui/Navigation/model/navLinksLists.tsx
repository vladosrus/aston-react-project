import { paths } from '../../../../../shared/model/paths';

export type NavLinkInfo = {
  to: string;
  text: string;
  title: string;
};

export const navLinksForUser: NavLinkInfo[] = [
  {
    to: paths.favoritesPage,
    text: 'Избранное',
    title: 'Перейти на страницу с избранными фотографиями'
  },
  {
    to: paths.historyPage,
    text: 'История',
    title: 'Посмотреть историю поиска'
  }
];
export const navLinksForGuest: NavLinkInfo[] = [
  {
    to: paths.loginPage,
    text: 'Авторизация',
    title: 'Перейти на страницу авторизации'
  },
  {
    to: paths.registrationPage,
    text: 'Регистрация',
    title: 'Перейти на страницу регистрации'
  }
];
