import {
  TypedStartListening,
  createListenerMiddleware
} from '@reduxjs/toolkit';
import { RootState } from '../../shared/lib/use-typed-selector';
import { Dispatch } from '../../shared/lib/use-typed-dispatch';

export const errorLogsMiddleware = createListenerMiddleware();

type AppStartListening = TypedStartListening<RootState, Dispatch>;

const startTypedListening =
  errorLogsMiddleware.startListening as AppStartListening;

startTypedListening({
  type: 'auth/userRegistered/rejected',
  effect: (_, { getState }) => {
    const error = getState().auth.userRegistered.error;
    // eslint-disable-next-line no-console
    console.log(`Произошла ошибка регистрации: ${error}`);
  }
});
startTypedListening({
  type: 'auth/userLoggedIn/rejected',
  effect: (_, { getState }) => {
    const error = getState().auth.userLoggedIn.error;
    // eslint-disable-next-line no-console
    console.log(`Произошла ошибка авторизации: ${error}`);
  }
});
startTypedListening({
  type: 'auth/userLoggedOut/rejected',
  effect: (_, { getState }) => {
    const error = getState().auth.userLoggedOut.error;
    // eslint-disable-next-line no-console
    console.log(`Произошла ошибка при выходе из аккаунта: ${error}`);
  }
});
startTypedListening({
  type: 'user/userDbProfileCreated/rejected',
  effect: (_, { getState }) => {
    const error =
      getState().user.asyncMethodsStatuses.userDbProfileCreated.error;
    // eslint-disable-next-line no-console
    console.log(
      `Произошла ошибка создания профиля пользователя в БД: ${error}`
    );
  }
});
startTypedListening({
  type: 'user/userDbProfileSynchronized/rejected',
  effect: (_, { getState }) => {
    const error =
      getState().user.asyncMethodsStatuses.userDbProfileSynchronized.error;
    // eslint-disable-next-line no-console
    console.log(`Произошла ошибка синхронизации данных пользователя: ${error}`);
  }
});
startTypedListening({
  type: 'user/addedToFavorites/rejected',
  effect: (_, { getState }) => {
    const error = getState().user.asyncMethodsStatuses.addedToFavorites.error;
    // eslint-disable-next-line no-console
    console.log(`Произошла ошибка при добавлении в избранное: ${error}`);
  }
});
startTypedListening({
  type: 'user/deletedFromFavorites/rejected',
  effect: (_, { getState }) => {
    const error =
      getState().user.asyncMethodsStatuses.deletedFromFavorites.error;
    // eslint-disable-next-line no-console
    console.log(`Произошла ошибка при удалении из избранного: ${error}`);
  }
});
startTypedListening({
  type: 'user/addedToHistory/rejected',
  effect: (_, { getState }) => {
    const error = getState().user.asyncMethodsStatuses.addedToHistory.error;
    // eslint-disable-next-line no-console
    console.log(`Произошла ошибка при добавлении в историю: ${error}`);
  }
});
startTypedListening({
  type: 'user/deletedOneQueryFromHistory/rejected',
  effect: (_, { getState }) => {
    const error =
      getState().user.asyncMethodsStatuses.deletedOneQueryFromHistory.error;
    // eslint-disable-next-line no-console
    console.log(
      `Произошла ошибка при удалении одного запроса из истории: ${error}`
    );
  }
});
startTypedListening({
  type: 'user/deletedAllQueriesFromHistory/rejected',
  effect: (_, { getState }) => {
    const error =
      getState().user.asyncMethodsStatuses.deletedAllQueriesFromHistory.error;
    // eslint-disable-next-line no-console
    console.log(
      `Произошла ошибка при удалении всех запросов из истории: ${error}`
    );
  }
});
