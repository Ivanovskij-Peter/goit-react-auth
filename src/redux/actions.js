import { UPLOAD_USER_PROFILE } from './types';

export const uploadProfileActoin = profile => ({
  type: UPLOAD_USER_PROFILE,
  payload: { profile },
});
