import React, { useState } from 'react';
import BasicTextFields from '../../../ui/BasicTextField';
import db from '../../../firebase/config';

export const Register = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUserWithEmailAndPassword = async ({
    email,
    password,
    nickname,
  }) => {
    await db.auth().createUserWithEmailAndPassword(email, password);
    const user = await db.auth().currentUser;
    user.updateProfile({
      displayName: nickname,
    });
    console.log(user);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userInfo = { nickname, email, password };
    createUserWithEmailAndPassword(userInfo);
    console.log({ nickname, email, password });
    setNickname('');
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <BasicTextFields
        value={nickname}
        name={'nickname'}
        label={'Nickname'}
        hanldeChange={setNickname}
      />
      <BasicTextFields
        value={email}
        name={'email'}
        label={'Email'}
        hanldeChange={setEmail}
      />
      <BasicTextFields
        value={password}
        name={'password'}
        label={'Password'}
        hanldeChange={setPassword}
      />
      <button>Register</button>
    </form>
  );
};
