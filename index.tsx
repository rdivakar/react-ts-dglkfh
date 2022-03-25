import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import WitHub from './components/Wit';
import './iconFont.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <WitHub />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
