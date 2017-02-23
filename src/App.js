import React from 'react';
import pageRouting from './Pages.js';
import TopNav from './TopNav.js';
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
      <div>
        <TopNav />
        <main id='page'>{this.pages[currentPage]}</main>
      </div>
    );
  }
}

export default App;
