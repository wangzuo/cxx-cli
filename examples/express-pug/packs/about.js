import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class About extends Component {
  render() {
    console.log('about page');
    return <div>about page</div>;
  }
}

ReactDOM.render(<About />, document.getElementById('app'));
