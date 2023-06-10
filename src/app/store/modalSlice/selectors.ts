import { NameSpace } from 'app/constants/constants';
import { type State } from 'app/types/redux';

const selectModalState = (state: State) => state[NameSpace.MODAL];

export const selectModalIsOpen = (state: State) =>
  selectModalState(state).isOpened;
export const selectModalType = (state: State) => selectModalState(state).type;
