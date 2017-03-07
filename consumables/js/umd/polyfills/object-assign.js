(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['babel-runtime/core-js/object/keys', 'babel-runtime/core-js/object/assign'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('babel-runtime/core-js/object/keys'), require('babel-runtime/core-js/object/assign'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.keys, global.assign);
    global.objectAssign = mod.exports;
  }
})(this, function (_keys, _assign) {
  'use strict';

  var _keys2 = _interopRequireDefault(_keys);

  var _assign2 = _interopRequireDefault(_assign);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Object.assign = _assign2.default || function assignObject(inDst) {
    if (inDst == null) {
      // eslint-disable-line eqeqeq
      // Throw if the given destination is null or undefined
      throw new TypeError('Can\'t convert to object: ${dst}');
    }

    var dst = Object(inDst);

    [].concat(Array.prototype.slice.call(arguments)).slice(1).forEach(function (inSrc) {
      var src = Object(inSrc);
      (0, _keys2.default)(src).forEach(function (prop) {
        dst[prop] = src[prop];
      });
    });

    return dst;
  };
});