import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({

});

class Header extends React.Component {
  render() {
    if (true) {
      return (
        <div className="header uk-navbar">
          <div className="uk-navbar-left">
            <label htmlFor="toggle1"><a className="ion-ios-menu header-toggle"> </a></label>
          </div>

          <div className="uk-navbar-center" id="headerLogo">
            <span className='header-text'><Link to='/'>
              <img src='https://i.imgur.com/zvMiK2k.png' className='header-logo' alt='Board Vision' />
              <span className="header-text"> BOARD.VISION</span>
            </Link></span>
          </div>

          <div className="uk-navbar-right">
            <div className="header-company">
              <a><div className="box-button-pill">Company ALPHA</div></a>
              <div uk-dropdown="mode: click; pos: bottom-right">
                <ul className="uk-nav uk-dropdown-nav">
                  <li className="header-dropdowntext"><Link to="/account">Company BETA</Link></li>
                </ul>
              </div>
            </div>


            <div className="header-contact">
              <a className="ion-ios-contact"> </a>
              <div uk-dropdown="mode: click; pos: bottom-right">
                <ul className="uk-nav uk-dropdown-nav">
                  <li className="header-dropdowntext"><Link to="/account"><i className="ion-ios-person"></i> {'\u00A0'}Account</Link></li>
                  <li className="header-dropdowntext"><a onClick={this.logout} href="/login"><i className="ion-ios-log-out"></i> {'\u00A0'}Log Out</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default connect(mapStateToProps)(Header);