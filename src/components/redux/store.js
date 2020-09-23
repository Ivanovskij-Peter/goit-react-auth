// import { createStore, combineReducers } from 'redux';
import { balanceReplanishment, errors } from './redusers';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// use redux+persist
// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['errors'],
// };
// const rootReducer = combineReducers({
//   balance: balanceReplanishment,
//   error: errors,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = createStore(persistedReducer, devToolsEnhancer());
// persistStore(store);

const rootReducer = combineReducers({
  balance: balanceReplanishment,
  // error: errors,
});
export const store = configureStore({
  reducer: rootReducer,
});
