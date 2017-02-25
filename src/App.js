import React from 'react';
import pageRouting from './Pages.js';
import TopNav from './TopNav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pages = pageRouting.pageList;  //Gets list of components from Pages.js
    this.state = {
      currentPage: 0 //index on the this.pages variable
    };
    this.changePage = this.changePage.bind(this);
  }
  changePage(page) {
    this.setState({
      currentPage: page
    });
  }

  //This function will replace the pageRouting.setPage so it can access
  //the changePage function, chaging this components state, redering the
  //new page.
  componentWillMount(){
    pageRouting.setPage = ((page) => this.changePage(page));
  }

  render() {
    let currentPage = this.state.currentPage;

    return (
      <div className='app'>
        <TopNav />
        <Main id='page'>
            {
                //Gets page component based on the current state
                this.pages[currentPage]
            }
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
