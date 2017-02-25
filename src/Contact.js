import React from 'react';

export default class AboutMe extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        <h1>ABOUT ME</h1>
        <p>Hello!</p>
        <p>Please visit my personal website here: <a href='http://www.andredantas.com'>www.andredantas.com</a></p>
      </div>
    );
  }
}
