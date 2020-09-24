import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import db from '../firebase/config';
import { uploadProfileActoin } from '../redux/actions';
import { useRoute } from '../router';

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  db.auth().onAuthStateChanged(user => {
    setUser(user);
    if (user) {
      const profile = {
        displayName: user.displayName,
        uid: user.uid,
        email: user.email,
      };
      dispatch(uploadProfileActoin(profile));
    }
  });
  console.log(user);
  const routing = useRoute(user);
  return <> {routing}</>;
}

export default App;
