"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Ishop from './components/Ishop';

var shopName='ishop';
var prod=require('./products.json');

ReactDOM.render(
    <Ishop name={shopName} products={prod}/>, 
    document.getElementById('container') 
);