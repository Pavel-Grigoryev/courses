import {slice} from './courses-slice';
import * as coursesSelectors from './courses-selectors'
const coursesReducer = slice.reducer;

const coursesActions = {
    ...slice.actions
}

export {coursesReducer, coursesActions, coursesSelectors};
