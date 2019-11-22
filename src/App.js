import React from 'react';
import Navbar from './components/layout/Navbar.component';
import Users from './components/users/users.component';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar/>
        <div className="container">
        <Users/>
        </div>
        
      </div>
    );
  }
}

export default App;
