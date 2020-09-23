import { createAction } from '@reduxjs/toolkit';
import { BALANCE_REPLENISHMENT, ERROR_USE } from './types';

// export const balanceReplanishmentAction = balance => ({
//   type: BALANCE_REPLENISHMENT,
//   payload: { balance },
// });

export const balanceReplanishmentAction = createAction(BALANCE_REPLENISHMENT);
// export const errorAction = message => ({
//   type: ERROR_USE,
//   payload: { message },
// });
