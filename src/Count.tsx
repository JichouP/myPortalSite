import React from 'react';
import { Provider } from 'mobx-react';

export default () => {
  return (
    <Provider>
      <div>
        <button
          onClick={() => {
            console.log('Clicked!');
          }}
        >
          カウント
        </button>
      </div>
    </Provider>
  );
};
