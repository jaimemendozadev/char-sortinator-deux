import React from 'react';
import {CollectionItem} from 'react-materialize';



const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};
  
export function escapeHtml(string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return entityMap[s];
  });
}


export function renderSortedStrings(sortedArr){
  return sortedArr.map((str, idx) =><CollectionItem key={idx}>{str}</CollectionItem>);
}

