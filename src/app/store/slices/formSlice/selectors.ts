import { type State } from 'app/types/redux';
import { NameSpace } from 'constants/constants';

const selectFormState = (state: State) => state[NameSpace.FORM];

export const selectFormInfo = (state: State) => selectFormState(state).formData;
