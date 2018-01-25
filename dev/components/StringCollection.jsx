import React from 'react';
import {renderSortedStrings} from './utils.js';
import {Collection} from 'react-materialize';

const StringCollection = (props) => {
  if (props.sortedArr.length == 0) {
    return null;
  }

  return (
    <Collection>
      {renderSortedStrings(props.sortedArr)}
    </Collection>
  )
}

export default StringCollection;