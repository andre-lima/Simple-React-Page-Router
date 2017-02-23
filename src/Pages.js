import React from 'react';
import Home from './Home.js';
import Game from './Game.js';
import AboutMe from './AboutMe.js';
import Contact from './Contact.js';

// item
const items = [
  {
    title:'Home',
    component: Home,
    page_id: 'home',
  },
  {
    title:'Game',
    component: Game,
    page_id: 'game',
  },
  {
    title:'About Me',
    component: AboutMe,
    page_id: 'about-me',
  },
  {
    title:'Contact',
    component: Contact,
    page_id: 'contact',
  },
];

/*function Pages(pages) {
  this.navItems = pages.map((page)=>page.title);
  //array of jsx elements
  this.pages = pages.map((item, index) => {
     return React.createElement(item.component, {id:item.page_id}, null);
  });
  this.context = [0];
  this.setPage = function(){};
  this.navigateTo = function(page){
    if(this.context[this.context.length-1] !== page) {
      this.context.push(page);
      this.setPage(page);
    }
  }
  this.returnTo = function(page){
      return this.context.pop();
  }
}*/

let PageRouting = function (pages) {
  const navItems = pages.map((page)=>page.title);
  //array of jsx elements
  const pageList = pages.map((item, index) => {
     return React.createElement(item.component, {id:item.page_id}, null);
  });
  let context = [0];
  let setPage = function(page){};
  const navigateTo = function(page){
    if(context[context.length-1] !== page) {
      context.push(page);
      this.setPage(page);
    }
  }

  return {
      setPage,
      navigateTo,
      pageList,
      navItems
  }

}

let pageRouting = new PageRouting(items);

export default pageRouting;
