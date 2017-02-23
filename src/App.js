import React from 'react';
import TopNav from './TopNav.js';
import pageRouting from './Pages.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
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
    let pages = pageRouting.pageList;
    let currentPage = this.state.currentPage;

    return (
      <div>
        <TopNav handlePage={this.changePage} />
        <main id='page'>{pages[currentPage]}</main>
      </div>
    );
  }
}

export default App;
