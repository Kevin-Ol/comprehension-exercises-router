import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class StrictAccess extends Component {
    
   AcessDenied() {
    alert('Access denied');
    return <Redirect to="/" />
}

  render() {
    const { user } = this.props;
    const { username, password } = user;

    return (
      <div>
          { (username === 'joao' && password === 1234) ? <p>Welcome joao!</p> : this.AcessDenied() }
      </div>
    );
  }
};

export default StrictAccess;

