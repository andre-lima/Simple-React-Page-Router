import React from 'react';
import './Main.css';

export default class Main extends React.Component {
  render() {
    return (
      <main id='page'>
        {this.props.children}
      </main>
    );
  }
}
