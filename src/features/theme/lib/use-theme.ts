import { themeChanged, themeSelector } from '../../../entities/theme';
import { useTypedDispatch } from '../../../shared/lib/use-typed-dispatch';
import { useTypedSelector } from '../../../shared/lib/use-typed-selector';

export const useTheme = () => {
  const { theme } = useTypedSelector(themeSelector);
  const dispatch = useTypedDispatch();

  const handleThemeButtonClick = (theme: 'light' | 'dark') => {
    if (theme === 'light') {
      dispatch(themeChanged('dark'));
    } else {
      dispatch(themeChanged('light'));
    }
  };

  return {
    theme,
    handleThemeButtonClick
  };
};
