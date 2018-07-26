import React from 'react';
import './PDF.css';

import { connect } from 'react-redux';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import pdf from './sample.pdf';

const mapStateToProps = state => ({

});

class PDF extends React.Component {
  state = {
    // numPages: null,
    pageNumber: 1,
  }

  // onDocumentLoadSuccess = ({ numPages }) => {
  //   this.setState({ numPages });
  // }

  render() {
    // const { pageNumber, numPages } = this.state;

    if (true) {
      return (
        <div className="pdf">
          <Document
            file={pdf}
            onLoadSuccess={this.onDocumentLoadSuccess} >
            <Page pageNumber={this.state.pageNumber}/>
          </Document>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default connect(mapStateToProps)(PDF);