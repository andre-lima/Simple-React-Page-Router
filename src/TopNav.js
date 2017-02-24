import React from 'react';
import pageRouting from './Pages.js';
import './TopNav.css';

export default class TopNav extends React.Component {
  handleClick(itemId) {
    pageRouting.navigateTo(itemId);
  }
  render() {
    const itemsElements = pageRouting.navItems.map((item, index) => (
      <li id={index} key={index}>
        <a className='item' onClick={() => {this.handleClick(index)}} >{item}</a>
      </li>
    ));
    return (
      <nav>
        <ul>
          {itemsElements}
        </ul>
      </nav>
    );
  }
}
