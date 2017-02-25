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

  //Expose API for the Pages system
  return {
      setPage,
      navigateTo,
      pageList,
      navItems
  }

}

//Create page object and set to initial page
let pageRouting = new PageRouting(items);
//pageRouting.navigateTo(0);

//Executed when the hash changes.
window.onpopstate = function(){
    let pageToGo = getItemsByHash[window.location.hash];

    if(pageToGo || pageToGo === 0)
        pageRouting.setPage(pageToGo);
    else {
        //If entering a wrong hash manually, it'll return to previous valid hash
        history.back();
    }
};

export default pageRouting;
