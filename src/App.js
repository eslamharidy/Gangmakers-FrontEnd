import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import UsersListContainer from './components/userslist-homepage/UsersListContainer'
import TicketDetailsContainer from './components/TicketDetailsContainer'
import TicketsContainer from './components/TicketsContainer'
import HomeContainer from './components/login-signup/HomeContainer'
function App() {
  return (
    <Provider store={store}>
        <div>
          <Route path="/" exact component={UsersListContainer} />
          <Route path="/login" exact component={HomeContainer} />
          <Route path="/event/:id/posts" component={TicketsContainer} />

          
        </div>
      </Provider>
  );
}

export default App;
