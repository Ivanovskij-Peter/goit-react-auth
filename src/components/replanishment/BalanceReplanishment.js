import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../ui/input';
import { balanceReplanishmentAction } from '../redux/actions';
import { errorAction } from '../redux/actions';

export function BalanceReplanishment() {
  const [state, setState] = useState(null);
  const dispatch = useDispatch();
  const hanldeSubmit = e => {
    e.preventDefault();
    if (!isNaN(state)) {
      dispatch(balanceReplanishmentAction(state));
    } else {
      // dispatch(errorAction('введите только число'));
    }
  };
  return (
    <form onSubmit={hanldeSubmit}>
      <Input
        name={'balanceReplanishment'}
        type={'text'}
        value={state ? state : ''}
        handleChange={({ target: { value, name } }) => setState(value)}
        placeholder={'balance'}
      />
    </form>
  );
}
