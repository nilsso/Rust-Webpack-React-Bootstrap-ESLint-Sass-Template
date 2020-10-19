import React from 'react';
import ReactDOM from 'react-dom';
import Root from './react/Root';

import('../pkg/index.js')
    .then((wasm) => {
        console.log(wasm);
        ReactDOM.render(
            React.createElement(Root, { wasm }),
            document.getElementById('root')
        );
    })
    .catch(console.error);
