import React from 'react';
import './Home.css';

import { connect } from 'react-redux';

import SideList from '../SideList/SideList';
import Main from '../Main/Main';
import Resolution from '../Resolution/Resolution';

const mapStateToProps = state => ({

});

class Home extends React.Component {
  render() {
    if (true) {
      return (
        <div className="home">
          <input id="toggle1" type="checkbox" />
          <div className="home-sidelist"><SideList /></div>
          <div className="home-main">
            <Main />
          </div>
          <Resolution />
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default connect(mapStateToProps)(Home);