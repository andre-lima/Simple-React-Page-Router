import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        <h1>How To Simply Route Pages in React</h1>
        <p>This is a simple routing alternative to creating SPAs in React.</p>
        <p>At the time of creating this, I have very limited knowledge of React.</p>
        <p>This is just a test where the main objective was to better understand React.</p>
      </div>
    );
  }
}
