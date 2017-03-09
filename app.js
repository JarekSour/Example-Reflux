/*
* Mosule dependencies
*/

import React from 'react';
import ImageGrid from './components/ImageGrid';
import ImageActions from './actions/ImageActions';

//actualizacion cada 5 seg
setInterval(() => {
  ImageActions.fetchList();
}, 5000);

React.render(
  <ImageGrid />,
  document.getElementById('container')
)
