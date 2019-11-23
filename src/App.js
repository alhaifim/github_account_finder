import React from 'react';
import Navbar from './components/layout/Navbar.component';
import Users from './components/users/users.component';
import Search from './components/users/search';
import axios from 'axios';
import './App.css';

class App extends React.Component {
state = {
  users: [],
  loading: false
}
async componentDidMount(){
  this.setState({loading: true});
  const resp = await axios.get(`https://api.github.com/users?client_id=$
  {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  this.setState({users: resp.data, loading: false});
}

  render() {
    return (
      <div className='App'>
        <Navbar/>
        <div className="container">
        <Search/>
        <Users users={this.state.users} loading={this.state.loading}/>
        </div>
        
      </div>
    );
  }
}

export default App;
