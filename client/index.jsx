import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const listingId = window.location.pathname.split('/')[2];

ReactDOM.render(<App listingId={listingId}/>, document.getElementById('review-module'));