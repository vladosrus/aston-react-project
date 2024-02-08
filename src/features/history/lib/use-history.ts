import { useTypedSelector } from '../../../shared/lib/use-typed-selector';
import { historySelector } from '../../../entities/user';

export const useHistory = () => {
  const { history, isHistoryLoading } = useTypedSelector(historySelector);

  return {
    history,
    isHistoryLoading
  };
};
