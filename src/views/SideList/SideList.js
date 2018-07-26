import React from 'react';
import './SideList.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({

});

class SideList extends React.Component {
  render() {
    if (true) {
      return (
        <div className="sidelist">
          <div className="sidelist-topbar">
            <label htmlFor="toggle2"><a className="ion-ios-search header-toggle"> </a></label>
            <input id="toggle2" type="checkbox" />
            <input className="sidelist-search" type="text" placeholder="Search..."/>

            <div className="box-spacer"></div>

            <a><div className="box-button-pill sidelist-button">New</div></a>
              <div uk-dropdown="mode: click; pos: bottom-right">
                <ul className="uk-nav uk-dropdown-nav">
                  <li className="header-dropdowntext"><Link to="/account">
                    <i className="ion-ios-radio-button-off"> </i> New</Link></li>
                  <li className="header-dropdowntext"><Link to="/account">
                    <i className="ion-ios-checkmark-circle-outline"> </i>Reviewed</Link></li>
                  <li className="header-dropdowntext"><Link to="/account">
                    <i className="ion-ios-checkmark-circle"> </i>Finalized</Link></li>
                </ul>
              </div>
            <a className="ion-ios-add-circle-outline sidelist-add" href="#resolution"> </a>
          </div>

          <a><div className="sidelist-item">
            <div className="sidelist-item-wrapper">
              <div className="sidelist-item-nd">
                <div className="box-heading-1">Name</div>
                <div className="box-spacer"></div>
                <div className="box-heading-time">Date</div>
              </div>
              <div className="box-text-2">Description</div>
            </div>
          </div></a>

        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default connect(mapStateToProps)(SideList);