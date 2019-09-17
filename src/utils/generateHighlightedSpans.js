import React from 'react';

export default (taggedSelections, documentText) => {
  const spanElements = [];
  if(taggedSelections.length >= 1) {
    let tempLine = '';
    let lastIndexAdded = 0;
    taggedSelections.forEach((selection, index) => {
      if(lastIndexAdded < selection.start) {
        const nonHighlightedLine = documentText.substring(lastIndexAdded, selection.start);
        spanElements.push(<span>{nonHighlightedLine}</span>);
        lastIndexAdded = selection.start;
      }
      tempLine = tempLine.concat(documentText.substring(lastIndexAdded, selection.end));
      lastIndexAdded = selection.end;
      if(index === taggedSelections.length - 1 || taggedSelections[index+1].start > lastIndexAdded) {
        spanElements.push(<span className="highlighted">{tempLine}</span>);
        tempLine = '';
    }
    });
    if(taggedSelections[taggedSelections.length-1].end != documentText.length) {
      const lastSpanContent = documentText.substring(taggedSelections[taggedSelections.length-1].end);
      spanElements.push(<span>{lastSpanContent}</span>);
    }
  } else {
    spanElements.push(<span>{documentText}</span>);
  }
  return spanElements;
}