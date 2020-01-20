import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyle from './styles/global';
import { Wrapper } from './styles/App';

import DevForm from './components/DevForm';
import DevList from './components/DevList';

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <DevForm />
        <DevList />
      </ Wrapper>
      <GlobalStyle />
    </Provider>
  );
}

export default App;
