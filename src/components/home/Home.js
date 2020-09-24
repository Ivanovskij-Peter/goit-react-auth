import React from 'react';
import db from '../../firebase/config';

export const Home = () => {
  const signOut = async () => {
    const signOutData = await db.auth().signOut();
    console.log(signOutData);
  };
  return (
    <div>
      <h2>HOME</h2>
      <button onClick={signOut}>Out</button>
    </div>
  );
};
