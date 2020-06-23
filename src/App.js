import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import users from './shared/users';

function App() {
  return (
    <div className="App">
      <ContactList users={users}/>
    </div>
  );
}

export default App;
