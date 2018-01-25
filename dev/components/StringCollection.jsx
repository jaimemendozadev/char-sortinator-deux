import React from 'react';
import {renderSortedStrings} from './utils.js';

const StringCollection = (props) => {
  if (props.sortedArr.length == 0) {
    return null;
  }

  return (
    <tbody>
      {renderSortedStrings(props.sortedArr)}
    </tbody>
  )
}

export default StringCollection;