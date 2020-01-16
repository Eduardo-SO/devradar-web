import React from 'react';

import './global.css';
import './App.css';

import DevForm from './components/DevForm';
import DevList from './components/DevList';

function App() {
  return (
    <div id="app">
      <aside>
        <DevForm />
      </aside>
      <main>
        <DevList />
      </main>
    </ div>
  );
}

export default App;
