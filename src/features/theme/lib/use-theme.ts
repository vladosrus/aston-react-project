import { useCallback } from 'react';
import { themeChanged, themeSelector } from '../../../entities/theme';
import { useTypedDispatch } from '../../../shared/lib/use-typed-dispatch';
import { useTypedSelector } from '../../../shared/lib/use-typed-selector';
import { themeLoaded } from '../model/theme-loaded';

export const useTheme = () => {
  const { theme, isLoading: isThemeLoading } = useTypedSelector(themeSelector);
  const dispatch = useTypedDispatch();

  const handleThemeButtonClick = useCallback(
    (theme: 'light' | 'dark') => {
      if (theme === 'light') {
        dispatch(themeChanged('dark'));
        localStorage.setItem('theme', 'dark');
      } else {
        dispatch(themeChanged('light'));
        localStorage.setItem('theme', 'light');
      }
    },
    [dispatch]
  );

  const handleLoadTheme = useCallback(() => {
    dispatch(themeLoaded());
  }, [dispatch]);

  return {
    theme,
    handleLoadTheme,
    isThemeLoading,
    handleThemeButtonClick
  };
};
