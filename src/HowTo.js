import React from 'react';

export default class HowTo extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
          <h1>How to use this:</h1>
          <ol>
              <li><a  href='https://github.com/andre-lima/Simple-React-Page-Router'>Click here</a> to go to the github repository for the project to clone the project.</li>
              <li>Copy the <code>Pages.js</code> to your <code>src</code> folder.</li>
              <li>Import your UI components there.
                  <ul>
                      <li>example: <code>import AboutMe from './AboutMe.js';</code></li>
                  </ul>
              </li>
              <li>Replace the components properties on the <code>items</code> variable
                  <ul>
                      <li>example: <code>title:'About Me', component: AboutMe, page_id: 'about-me',</code></li>
                  </ul>
              </li>
              <li>On your navigation, add an event that calls
                  <ul>
                      <li>example: <code>pageRouting.navigateTo(itemId);</code> where <code>itemId</code> is the index of the page on the <code>items</code> variable.</li>
                  </ul>
              </li>
              <li>Now it gets messy...so it's better if you read the comments on the <code>App.js</code> file.</li>
              <li>I guess that's all...</li>
          </ol>
      </div>
    );
  }
}
