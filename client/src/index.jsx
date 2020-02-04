import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Bluefin-Mortgage-Service/client/src/mortgageComponents/App.jsx';
import Similiar from './components/Bluefin-Service-SimilarHomes/client/src/components/App.jsx';
// window.React2 = require('react');
// console.log(window.React1 === window.React2);



ReactDOM.render(<App listingId={1} />, document.getElementById('mortgage'));

ReactDOM.render(<Similiar />, document.getElementById('similiar'));
// ReactDOM.render(<Schedule listingId={199099335}/>, document.getElementById('schedule'));