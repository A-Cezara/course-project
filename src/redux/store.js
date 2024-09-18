import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { tutorsReducer } from './tutors/reducer';
import { combineReducers } from 'redux';

// export const rootReducer = (state = {}, action) => {
//   return {
//     tutors: tutorsReducer,
//   };
// };

export const rootReducer = combineReducers({
  tutorsSlice: tutorsReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
