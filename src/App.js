import React from 'react';
import pageRouting from './Pages.js';
import TopNav from './TopNav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pages = pageRouting.pageList;
    this.state = {
      currentPage: 0
    };
    this.changePage = this.changePage.bind(this);
  }
  changePage(page) {
    this.setState({
      currentPage: page
    });
  }

  componentWillMount(){
    pageRouting.setPage = ((page) => this.changePage(page));
  }

  render() {
    let currentPage = this.state.currentPage;

    return (
      <div className='app'>
        <TopNav />
        <Main id='page'>{this.pages[currentPage]}</Main>
        <Footer />
      </div>
    );
  }
}

export default App;
