import { useCallback, useEffect } from 'react';
import { themeChanged, themeSelector } from '../../../entities/theme';
import { useTypedDispatch } from '../../../shared/lib/use-typed-dispatch';
import { useTypedSelector } from '../../../shared/lib/use-typed-selector';
import { themeLoaded } from '../model/theme-loaded';

export const useTheme = () => {
  const { theme } = useTypedSelector(themeSelector);
  const dispatch = useTypedDispatch();

  const handleThemeButtonClick = (theme: 'light' | 'dark') => {
    if (theme === 'light') {
      dispatch(themeChanged('dark'));
      localStorage.setItem('theme', 'dark');
    } else {
      dispatch(themeChanged('light'));
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLoadTheme = useCallback(() => {
    dispatch(themeLoaded());
  }, [dispatch]);

  useEffect(() => {
    handleLoadTheme();
  }, [handleLoadTheme]);

  return {
    theme,
    handleThemeButtonClick
  };
};
