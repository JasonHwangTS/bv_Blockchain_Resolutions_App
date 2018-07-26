import React from 'react';
import './Main.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import DonutChart from '../DonutChart/DonutChart';
import PDF from '../PDF/PDF';

const mapStateToProps = state => ({

});

class Main extends React.Component {
  render() {
    if (true) {
      return (
        <div className="main">
          <div className="box-container main-topbar">
            <DonutChart value={50} value2={30} value3={10} />
            <div className="main-toptext"><span className="main-toptextnumber">5</span> Approve</div>
            <div className="main-toptext"><span className="main-toptextnumber">3</span> Reject</div>
            <div className="main-toptext"><span className="main-toptextnumber">1</span> Abstain</div>
            <div className="box-spacer"></div>
            <a><div className="box-button-pill">Version 1</div></a>
            <div uk-dropdown="mode: click; pos: bottom-right">
              <ul className="uk-nav uk-dropdown-nav">
                <li className="header-dropdowntext"><Link to="/account">Version 2</Link></li>
              </ul>
            </div>

            <div className="uk-form-custom">
              <input type="file" />
              <a className="ion-ios-add-circle-outline sidelist-add main-add"> </a>
            </div>
          </div>
          <div className="box-margin-top main-pdf">
            <div className="main-shrink">
              <PDF />
              <button className="uk-button uk-button-default main-buttonmargin uk-margin-large-right">Open</button>
              <button className="uk-button uk-button-default main-buttonmargin main-green ">Approve</button>
              <button className="uk-button uk-button-secondary main-buttonmargin">Abstain</button>
              <button className="uk-button uk-button-danger main-buttonmargin">Reject</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default connect(mapStateToProps)(Main);