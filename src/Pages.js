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

const getItemsByHash = {};
for(let i in items) {
    getItemsByHash['#'+items[i].title] = +i;
}

let PageRouting = function (pages) {
  const navItems = pages.map((page)=>page.title);
  //array of jsx elements
  const pageList = pages.map((item, index) => {
     return React.createElement(item.component, {id:item.page_id}, null);
  });

  let setPage = function(page){};
  const navigateTo = function(page){
      window.location.hash = items[page].title;
      this.setPage(page);
  }

  return {
      setPage,
      navigateTo,
      pageList,
      navItems
  }

}

let pageRouting = new PageRouting(items);
pageRouting.navigateTo(0);

window.onpopstate = function(){
    let pageToGo = getItemsByHash[window.location.hash];
    if(pageToGo)
        pageRouting.setPage(pageToGo);
    else {
        history.back(); //If entering a wrong hash manually, it'll return to previous valid hash
    }
};

export default pageRouting;
