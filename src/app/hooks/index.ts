import { type State, type AppDispatch } from 'app/types/redux';
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
