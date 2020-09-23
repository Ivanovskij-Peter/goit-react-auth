import React, { useEffect, useState } from 'react';
import db from './firebase/config';
function App() {
  const [users, setUsers] = useState([]);
  const getCurrentUser = async () => {
    await db
      .firestore()
      .collection('notes')
      .onSnapshot(doc => {
        const data = doc.docs.map(elem => ({
          ...elem.data(),
          id: elem.id,
        }));
        setUsers(data);
      });
    // const transformData = data.docs.map(elem => ({
    //   ...elem.data(),
    //   id: elem.id,
    // }));
    // console.log('transformData', transformData);
  };
  const putCurrentUser = async () => {
    const data = await db.firestore().collection('notes').add({
      name: 'Jhone',
    });

    // const transformData = data.docs.map(elem => ({
    //   ...elem.data(),
    //   id: elem.id,
    // }));
    // console.log('transformData', transformData);
  };
  const deleteUser = id => {
    db.firestore().collection('notes').doc(id).delete();
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <button onClick={putCurrentUser}>add new User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <button onClick={() => deleteUser(user.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
