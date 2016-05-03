import React from 'react';

import { UserHello } from '../components/UserHello.jsx';
import { UserLogin } from '../components/UserLogin.jsx';
import { MessageForm } from '../components/MessageForm.jsx';

export const UserPage = ({ currentUser }) => {
  return (
    <div>
      { currentUser
          ? (<div>
              <UserHello name={ currentUser.services.facebook.first_name } />
              <MessageForm />
            </div>)
          : <UserLogin /> }
    </div>
  );
};