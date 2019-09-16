import React from 'react';

import TagTreeContainer from '../containers/TagTreeContainer';
import DocumentViewerContainer from '../containers/DocumentViewerContainer';

function App() {
  return (
    <div className="App"> 
      <DocumentViewerContainer />
      <TagTreeContainer />
    </div>
  );
}

export default App;
