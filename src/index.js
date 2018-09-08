import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: []
    };
  }

  render() {
    return <div>{"I'm an app"}</div>
  }
}


ReactDOM.render(<App />, document.getElementById('root'));