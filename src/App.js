import React from 'react';
import Navbar from './components/layout/Navbar.component';
import UserItem from './components/users/userItem.component';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar/>
        <UserItem/>
      </div>
    );
  }
}

export default App;
