import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class StrictAccess extends Component {
    
  render() {
    const { user } = this.props;
    const { username, password } = user;

    const AcessDenied = () => {
        alert('Access denied');
        console.log('acesso negado')
        return <Redirect to="/" />
    }
    { console.log('renderizou') }
    return (
      <div>
          { (username === 'joao' && password === 1234) ? <p>Welcome joao!</p> : AcessDenied()}
      </div>
    );
  }
};

export default StrictAccess;
