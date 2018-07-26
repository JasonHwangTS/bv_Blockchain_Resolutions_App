import React from 'react';
import './Resolution.css';

import { connect } from 'react-redux';

const mapStateToProps = state => ({

});

class Resolution extends React.Component {
  render() {
    if (true) {
      return (
        <div className="resolution">
          <div id="resolution" className="modal-window">
            <div>
              <a href="#close" className="close ion-ios-close-circle-outline"> </a>
              <h1>New Resolution</h1>
              <input className="uk-input uk-margin-small-bottom" type="text" placeholder="Name" />
              <input className="uk-input uk-margin-small-bottom" type="text" placeholder="Description" />
              <input className="uk-input uk-margin-small-bottom" type="text" placeholder="Participants" />
              <input className="uk-input uk-margin-small-bottom" type="text" placeholder="Deadline" />
              <div uk-form-custom="target: true">
                <input type="file" />
                <input className="uk-input uk-form-width-medium uk-margin-small-bottom" type="text" placeholder="Select file" disabled />
              </div>
              <div><button className="uk-button uk-button-default">Submit</button></div>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default connect(mapStateToProps)(Resolution);