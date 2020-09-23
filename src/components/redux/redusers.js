import { createReducer } from '@reduxjs/toolkit';
import { BALANCE_REPLENISHMENT, ERROR_USE } from './types';

const balanceReplanishmentInitialState = 0;
// redux
// export const balanceReplanishment = (
//   state = balanceReplanishmentInitialState,
//   { type, payload },
// ) => {
//   switch (type) {
//     case BALANCE_REPLENISHMENT:
//       return payload.balance;
//     default:
//       return state;
//   }
// };

// redux-toolkit
export const balanceReplanishment = createReducer(
  balanceReplanishmentInitialState,
  {
    [BALANCE_REPLENISHMENT]: (state, { type, payload }) => payload,
  },
);

const errorsInitialState = {
  message: '',
};
export const errors = createReducer(errorsInitialState, {
  [ERROR_USE]: (state, { payload }) => ({ message: payload }),
  [BALANCE_REPLENISHMENT]: () => ({ message: '' }),
});

// export const errors = (state = errorsInitialState, { type, payload }) => {
//   switch (type) {
//     case ERROR_USE:
//       return { message: payload.message };
//     case BALANCE_REPLENISHMENT:
//       return { message: '' };
//     default:
//       return state;
//   }
// };
