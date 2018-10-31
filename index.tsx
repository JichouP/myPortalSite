import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './src/App';
import Vivus from 'vivus';
import Snap from 'snapsvg';
import logofile from './res/logo.svg';

const logo = document.getElementsByTagName('svg');
if (logo) {
  while (logo.length) {
    logo[0].remove();
  }
}
new Vivus(
  'logodiv',
  {
    file: logofile,
    delay: 100,
    onReady: () => {
      const logo = document.getElementsByTagName('svg')[0];
      console.log(logo.style);
    },
  },
  () => {
    Snap('#svg8')
      .selectAll('path')
      .animate({ fillOpacity: 1 }, 400);
  }
);

ReactDOM.render(<App />, document.getElementById('root'));
