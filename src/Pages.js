import React from 'react';
import Home from './Home.js';
import HowTo from './HowTo.js';
import Contact from './Contact.js';

//Replace your components information here
const items = [
  {
    title:'Home',
    component: Home,
    page_id: 'home',
  },
  {
    title:'How To Use It',
    component: HowTo,
    page_id: 'how-to',
  },
  {
    title:'Contact',
    component: Contact,
    page_id: 'contact',
  },
];

const getItemsByHash = {};
for(let i = 0; i < items.length; ++i) {
    getItemsByHash['#'+items[i].page_id] = +i;
}

let PageRouting = function (pages) {
  const navItems = pages.map((page)=>page.title);
  //array of jsx elements
  const pageList = pages.map((item, index) => {
     return React.createElement(item.component, {id:item.page_id}, null);
  });

  let setPage = function(page){};
  const navigateTo = function(page){
      this.setPage(page);
      window.location.hash = items[page].page_id;
  }

  //Expose API for the Pages system
  return {
      setPage, //Change page without changing hash
      navigateTo,  //Change page and change hash
      pageList,  //List of page components
      navItems //Name of navigation items you can use to access the components
  }
}

//Create page object and set to initial page
let pageRouting = new PageRouting(items);

//Executed when loading page for the first time, mannually changing the hash,
//or returning from a different page
let readHash = function(){
    const hash = window.location.hash;

    let pageToGo = getItemsByHash[hash];
console.log(pageToGo, hash);
    if(pageToGo || pageToGo === 0)
        pageRouting.navigateTo(pageToGo);
    else if (hash === '')
        pageRouting.setPage(0);
    else {
        window.history.back();
    }
}

//
window.onload = readHash;

//Executed when the hash changes.
window.onpopstate = readHash;

export default pageRouting;
