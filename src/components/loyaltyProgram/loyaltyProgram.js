import React from 'react';
import { useSelector } from 'react-redux';
import { BalanceReplanishment } from '../replanishment/BalanceReplanishment';

export function LoyaltyProgram() {
  const { balance } = useSelector(state => state);
  return (
    <>
      <h2>balance:{balance}</h2>
      <BalanceReplanishment />
    </>
  );
}
