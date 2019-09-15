import React, { Component } from 'react';

export default class DocumentViewerComponent extends Component {
  
  render() {
    const { document } = this.props;

    return (
      <div>
        {document.text}
      </div>
    );
  }
}