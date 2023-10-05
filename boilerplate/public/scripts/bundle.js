'use strict';

var _utilities = require('./utilities');

var _utilities2 = _interopRequireDefault(_utilities);

var _scream = require('./scream');

var _scream2 = _interopRequireDefault(_scream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('index.js');
console.log((0, _utilities.add)(32, 4));
console.log((0, _scream2.default)(_utilities.name));
console.log((0, _utilities2.default)(10));
