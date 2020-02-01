import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import UsersListContainer from './components/userslist-homepage/UsersListContainer'
import PostsContainer from './components/posts/PostsContainer'
import HomeContainer from './components/login-signup/HomeContainer'

function App() {
  return (
    <Provider store={store}>
        <div>
          <Route path="/" exact component={UsersListContainer} />
          <Route path="/login" exact component={HomeContainer} />
          <Route path="/user/:id/posts" component={PostsContainer} />

          
        </div>
      </Provider>
  );
}

export default App;
