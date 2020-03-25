!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define('underscore.string',e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.s=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var trim = _dereq_('./trim');
var decap = _dereq_('./decapitalize');

module.exports = function camelize(str, decapitalize) {
  str = trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {
    return c ? c.toUpperCase() : "";
  });

  if (decapitalize === true) {
    return decap(str);
  } else {
    return str;
  }
};

},{"./decapitalize":9,"./trim":61}],2:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function capitalize(str, lowercaseRest) {
  str = makeString(str);
  var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();

  return str.charAt(0).toUpperCase() + remainingChars;
};

},{"./helper/makeString":20}],3:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function chars(str) {
  return makeString(str).split('');
};

},{"./helper/makeString":20}],4:[function(_dereq_,module,exports){
module.exports = function chop(str, step) {
  if (str == null) return [];
  str = String(str);
  step = ~~step;
  return step > 0 ? str.match(new RegExp('.{1,' + step + '}', 'g')) : [str];
};

},{}],5:[function(_dereq_,module,exports){
var capitalize = _dereq_('./capitalize');
var camelize = _dereq_('./camelize');
var makeString = _dereq_('./helper/makeString');

module.exports = function classify(str) {
  str = makeString(str);
  return capitalize(camelize(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
};

},{"./camelize":1,"./capitalize":2,"./helper/makeString":20}],6:[function(_dereq_,module,exports){
var trim = _dereq_('./trim');

module.exports = function clean(str) {
  return trim(str).replace(/\s+/g, ' ');
};

},{"./trim":61}],7:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function(str, substr) {
  str = makeString(str);
  substr = makeString(substr);

  if (str.length === 0 || substr.length === 0) return 0;
  
  return str.split(substr).length - 1;
};

},{"./helper/makeString":20}],8:[function(_dereq_,module,exports){
var trim = _dereq_('./trim');

module.exports = function dasherize(str) {
  return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};

},{"./trim":61}],9:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function decapitalize(str) {
  str = makeString(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
};

},{"./helper/makeString":20}],10:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

function getIndent(str) {
  var matches = str.match(/^[\s\\t]*/gm);
  var indent = matches[0].length;
  
  for (var i = 1; i < matches.length; i++) {
    indent = Math.min(matches[i].length, indent);
  }

  return indent;
}

module.exports = function dedent(str, pattern) {
  str = makeString(str);
  var indent = getIndent(str);
  var reg;

  if (indent === 0) return str;

  if (typeof pattern === 'string') {
    reg = new RegExp('^' + pattern, 'gm');
  } else {
    reg = new RegExp('^[ \\t]{' + indent + '}', 'gm');
  }

  return str.replace(reg, '');
};

},{"./helper/makeString":20}],11:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var toPositive = _dereq_('./helper/toPositive');

module.exports = function endsWith(str, ends, position) {
  str = makeString(str);
  ends = '' + ends;
  if (typeof position == 'undefined') {
    position = str.length - ends.length;
  } else {
    position = Math.min(toPositive(position), str.length) - ends.length;
  }
  return position >= 0 && str.indexOf(ends, position) === position;
};

},{"./helper/makeString":20,"./helper/toPositive":22}],12:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var escapeChars = _dereq_('./helper/escapeChars');
var reversedEscapeChars = {};

var regexString = "[";
for(var key in escapeChars) {
  regexString += key;
}
regexString += "]";

var regex = new RegExp( regexString, 'g');

module.exports = function escapeHTML(str) {

  return makeString(str).replace(regex, function(m) {
    return '&' + escapeChars[m] + ';';
  });
};

},{"./helper/escapeChars":17,"./helper/makeString":20}],13:[function(_dereq_,module,exports){
module.exports = function() {
  var result = {};

  for (var prop in this) {
    if (!this.hasOwnProperty(prop) || prop.match(/^(?:include|contains|reverse|join)$/)) continue;
    result[prop] = this[prop];
  }

  return result;
};

},{}],14:[function(_dereq_,module,exports){
//  Underscore.string
//  (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
//  Underscore.string is freely distributable under the terms of the MIT license.
//  Documentation: https://github.com/epeli/underscore.string
//  Some code is borrowed from MooTools and Alexandru Marasteanu.
//  Version '3.1.1'



function s(value) {
  /* jshint validthis: true */
  if (!(this instanceof s)) return new s(value);
  this._wrapped = value;
}

s.VERSION = '3.1.1';

s.isBlank          = _dereq_('./isBlank');
s.stripTags        = _dereq_('./stripTags');
s.capitalize       = _dereq_('./capitalize');
s.decapitalize     = _dereq_('./decapitalize');
s.chop             = _dereq_('./chop');
s.trim             = _dereq_('./trim');
s.clean            = _dereq_('./clean');
s.count            = _dereq_('./count');
s.chars            = _dereq_('./chars');
s.swapCase         = _dereq_('./swapCase');
s.escapeHTML       = _dereq_('./escapeHTML');
s.unescapeHTML     = _dereq_('./unescapeHTML');
s.splice           = _dereq_('./splice');
s.insert           = _dereq_('./insert');
s.replaceAll       = _dereq_('./replaceAll');
s.include          = _dereq_('./include');
s.join             = _dereq_('./join');
s.lines            = _dereq_('./lines');
s.dedent           = _dereq_('./dedent');
s.reverse          = _dereq_('./reverse');
s.startsWith       = _dereq_('./startsWith');
s.endsWith         = _dereq_('./endsWith');
s.pred             = _dereq_('./pred');
s.succ             = _dereq_('./succ');
s.titleize         = _dereq_('./titleize');
s.camelize         = _dereq_('./camelize');
s.underscored      = _dereq_('./underscored');
s.dasherize        = _dereq_('./dasherize');
s.classify         = _dereq_('./classify');
s.humanize         = _dereq_('./humanize');
s.ltrim            = _dereq_('./ltrim');
s.rtrim            = _dereq_('./rtrim');
s.truncate         = _dereq_('./truncate');
s.prune            = _dereq_('./prune');
s.words            = _dereq_('./words');
s.pad              = _dereq_('./pad');
s.lpad             = _dereq_('./lpad');
s.rpad             = _dereq_('./rpad');
s.lrpad            = _dereq_('./lrpad');
s.sprintf          = _dereq_('./sprintf');
s.vsprintf         = _dereq_('./vsprintf');
s.toNumber         = _dereq_('./toNumber');
s.numberFormat     = _dereq_('./numberFormat');
s.strRight         = _dereq_('./strRight');
s.strRightBack     = _dereq_('./strRightBack');
s.strLeft          = _dereq_('./strLeft');
s.strLeftBack      = _dereq_('./strLeftBack');
s.toSentence       = _dereq_('./toSentence');
s.toSentenceSerial = _dereq_('./toSentenceSerial');
s.slugify          = _dereq_('./slugify');
s.surround         = _dereq_('./surround');
s.quote            = _dereq_('./quote');
s.unquote          = _dereq_('./unquote');
s.repeat           = _dereq_('./repeat');
s.naturalCmp       = _dereq_('./naturalCmp');
s.levenshtein      = _dereq_('./levenshtein');
s.toBoolean        = _dereq_('./toBoolean');
s.exports          = _dereq_('./exports');
s.escapeRegExp     = _dereq_('./helper/escapeRegExp');

// Aliases
s.strip     = s.trim;
s.lstrip    = s.ltrim;
s.rstrip    = s.rtrim;
s.center    = s.lrpad;
s.rjust     = s.lpad;
s.ljust     = s.rpad;
s.contains  = s.include;
s.q         = s.quote;
s.toBool    = s.toBoolean;
s.camelcase = s.camelize;


// Implement chaining
s.prototype = {
  value: function value() {
    return this._wrapped;
  }
};

function fn2method(key, fn) {
    if (typeof fn !== "function") return;
    s.prototype[key] = function() {
      var args = [this._wrapped].concat(Array.prototype.slice.call(arguments));
      var res = fn.apply(null, args);
      // if the result is non-string stop the chain and return the value
      return typeof res === 'string' ? new s(res) : res;
    };
}

// Copy functions to instance methods for chaining
for (var key in s) fn2method(key, s[key]);

fn2method("tap", function tap(string, fn) {
  return fn(string);
});

function prototype2method(methodName) {
  fn2method(methodName, function(context) {
    var args = Array.prototype.slice.call(arguments, 1);
    return String.prototype[methodName].apply(context, args);
  });
}

var prototypeMethods = [
  "toUpperCase",
  "toLowerCase",
  "split",
  "replace",
  "slice",
  "substring",
  "substr",
  "concat"
];

for (var key in prototypeMethods) prototype2method(prototypeMethods[key]);


module.exports = s;

},{"./camelize":1,"./capitalize":2,"./chars":3,"./chop":4,"./classify":5,"./clean":6,"./count":7,"./dasherize":8,"./decapitalize":9,"./dedent":10,"./endsWith":11,"./escapeHTML":12,"./exports":13,"./helper/escapeRegExp":18,"./humanize":23,"./include":24,"./insert":25,"./isBlank":26,"./join":27,"./levenshtein":28,"./lines":29,"./lpad":30,"./lrpad":31,"./ltrim":32,"./naturalCmp":33,"./numberFormat":34,"./pad":35,"./pred":36,"./prune":37,"./quote":38,"./repeat":39,"./replaceAll":40,"./reverse":41,"./rpad":42,"./rtrim":43,"./slugify":44,"./splice":45,"./sprintf":46,"./startsWith":47,"./strLeft":48,"./strLeftBack":49,"./strRight":50,"./strRightBack":51,"./stripTags":52,"./succ":53,"./surround":54,"./swapCase":55,"./titleize":56,"./toBoolean":57,"./toNumber":58,"./toSentence":59,"./toSentenceSerial":60,"./trim":61,"./truncate":62,"./underscored":63,"./unescapeHTML":64,"./unquote":65,"./vsprintf":66,"./words":67}],15:[function(_dereq_,module,exports){
var makeString = _dereq_('./makeString');

module.exports = function adjacent(str, direction) {
  str = makeString(str);
  if (str.length === 0) {
    return '';
  }
  return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);
};

},{"./makeString":20}],16:[function(_dereq_,module,exports){
var escapeRegExp = _dereq_('./escapeRegExp');

module.exports = function defaultToWhiteSpace(characters) {
  if (characters == null)
    return '\\s';
  else if (characters.source)
    return characters.source;
  else
    return '[' + escapeRegExp(characters) + ']';
};

},{"./escapeRegExp":18}],17:[function(_dereq_,module,exports){
/* We're explicitly defining the list of entities we want to escape.
nbsp is an HTML entity, but we don't want to escape all space characters in a string, hence its omission in this map.

*/
var escapeChars = {
  '¢' : 'cent',
  '£' : 'pound',
  '¥' : 'yen',
  '€': 'euro',
  '©' :'copy',
  '®' : 'reg',
  '<' : 'lt',
  '>' : 'gt',
  '"' : 'quot',
  '&' : 'amp',
  "'": '#39'
};

module.exports = escapeChars;

},{}],18:[function(_dereq_,module,exports){
var makeString = _dereq_('./makeString');

module.exports = function escapeRegExp(str) {
  return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};

},{"./makeString":20}],19:[function(_dereq_,module,exports){
/*
We're explicitly defining the list of entities that might see in escape HTML strings
*/
var htmlEntities = {
  nbsp: ' ',
  cent: '¢',
  pound: '£',
  yen: '¥',
  euro: '€',
  copy: '©',
  reg: '®',
  lt: '<',
  gt: '>',
  quot: '"',
  amp: '&',
  apos: "'"
};

module.exports = htmlEntities;

},{}],20:[function(_dereq_,module,exports){
/**
 * Ensure some object is a coerced to a string
 **/
module.exports = function makeString(object) {
  if (object == null) return '';
  return '' + object;
};

},{}],21:[function(_dereq_,module,exports){
module.exports = function strRepeat(str, qty){
  if (qty < 1) return '';
  var result = '';
  while (qty > 0) {
    if (qty & 1) result += str;
    qty >>= 1, str += str;
  }
  return result;
};

},{}],22:[function(_dereq_,module,exports){
module.exports = function toPositive(number) {
  return number < 0 ? 0 : (+number || 0);
};

},{}],23:[function(_dereq_,module,exports){
var capitalize = _dereq_('./capitalize');
var underscored = _dereq_('./underscored');
var trim = _dereq_('./trim');

module.exports = function humanize(str) {
  return capitalize(trim(underscored(str).replace(/_id$/, '').replace(/_/g, ' ')));
};

},{"./capitalize":2,"./trim":61,"./underscored":63}],24:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function include(str, needle) {
  if (needle === '') return true;
  return makeString(str).indexOf(needle) !== -1;
};

},{"./helper/makeString":20}],25:[function(_dereq_,module,exports){
var splice = _dereq_('./splice');

module.exports = function insert(str, i, substr) {
  return splice(str, i, 0, substr);
};

},{"./splice":45}],26:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function isBlank(str) {
  return (/^\s*$/).test(makeString(str));
};

},{"./helper/makeString":20}],27:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var slice = [].slice;

module.exports = function join() {
  var args = slice.call(arguments),
    separator = args.shift();

  return args.join(makeString(separator));
};

},{"./helper/makeString":20}],28:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

/**
 * Based on the implementation here: https://github.com/hiddentao/fast-levenshtein
 */
module.exports = function levenshtein(str1, str2) {
  'use strict';
  str1 = makeString(str1);
  str2 = makeString(str2);

  // Short cut cases  
  if (str1 === str2) return 0;
  if (!str1 || !str2) return Math.max(str1.length, str2.length);

  // two rows
  var prevRow = new Array(str2.length + 1);

  // initialise previous row
  for (var i = 0; i < prevRow.length; ++i) {
    prevRow[i] = i;
  }

  // calculate current row distance from previous row
  for (i = 0; i < str1.length; ++i) {
    var nextCol = i + 1;

    for (var j = 0; j < str2.length; ++j) {
      var curCol = nextCol;

      // substution
      nextCol = prevRow[j] + ( (str1.charAt(i) === str2.charAt(j)) ? 0 : 1 );
      // insertion
      var tmp = curCol + 1;
      if (nextCol > tmp) {
        nextCol = tmp;
      }
      // deletion
      tmp = prevRow[j + 1] + 1;
      if (nextCol > tmp) {
        nextCol = tmp;
      }

      // copy current col value into previous (in preparation for next iteration)
      prevRow[j] = curCol;
    }

    // copy last col value into previous (in preparation for next iteration)
    prevRow[j] = nextCol;
  }

  return nextCol;
};

},{"./helper/makeString":20}],29:[function(_dereq_,module,exports){
module.exports = function lines(str) {
  if (str == null) return [];
  return String(str).split(/\r?\n/);
};

},{}],30:[function(_dereq_,module,exports){
var pad = _dereq_('./pad');

module.exports = function lpad(str, length, padStr) {
  return pad(str, length, padStr);
};

},{"./pad":35}],31:[function(_dereq_,module,exports){
var pad = _dereq_('./pad');

module.exports = function lrpad(str, length, padStr) {
  return pad(str, length, padStr, 'both');
};

},{"./pad":35}],32:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');
var nativeTrimLeft = String.prototype.trimLeft;

module.exports = function ltrim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+'), '');
};

},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],33:[function(_dereq_,module,exports){
module.exports = function naturalCmp(str1, str2) {
  if (str1 == str2) return 0;
  if (!str1) return -1;
  if (!str2) return 1;

  var cmpRegex = /(\.\d+|\d+|\D+)/g,
    tokens1 = String(str1).match(cmpRegex),
    tokens2 = String(str2).match(cmpRegex),
    count = Math.min(tokens1.length, tokens2.length);

  for (var i = 0; i < count; i++) {
    var a = tokens1[i],
      b = tokens2[i];

    if (a !== b) {
      var num1 = +a;
      var num2 = +b;
      if (num1 === num1 && num2 === num2) {
        return num1 > num2 ? 1 : -1;
      }
      return a < b ? -1 : 1;
    }
  }

  if (tokens1.length != tokens2.length)
    return tokens1.length - tokens2.length;

  return str1 < str2 ? -1 : 1;
};

},{}],34:[function(_dereq_,module,exports){
module.exports = function numberFormat(number, dec, dsep, tsep) {
  if (isNaN(number) || number == null) return '';

  number = number.toFixed(~~dec);
  tsep = typeof tsep == 'string' ? tsep : ',';

  var parts = number.split('.'),
    fnums = parts[0],
    decimals = parts[1] ? (dsep || '.') + parts[1] : '';

  return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + tsep) + decimals;
};

},{}],35:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var strRepeat = _dereq_('./helper/strRepeat');

module.exports = function pad(str, length, padStr, type) {
  str = makeString(str);
  length = ~~length;

  var padlen = 0;

  if (!padStr)
    padStr = ' ';
  else if (padStr.length > 1)
    padStr = padStr.charAt(0);

  switch (type) {
    case 'right':
      padlen = length - str.length;
      return str + strRepeat(padStr, padlen);
    case 'both':
      padlen = length - str.length;
      return strRepeat(padStr, Math.ceil(padlen / 2)) + str + strRepeat(padStr, Math.floor(padlen / 2));
    default: // 'left'
      padlen = length - str.length;
      return strRepeat(padStr, padlen) + str;
  }
};

},{"./helper/makeString":20,"./helper/strRepeat":21}],36:[function(_dereq_,module,exports){
var adjacent = _dereq_('./helper/adjacent');

module.exports = function succ(str) {
  return adjacent(str, -1);
};

},{"./helper/adjacent":15}],37:[function(_dereq_,module,exports){
/**
 * _s.prune: a more elegant version of truncate
 * prune extra chars, never leaving a half-chopped word.
 * @author github.com/rwz
 */
var makeString = _dereq_('./helper/makeString');
var rtrim = _dereq_('./rtrim');

module.exports = function prune(str, length, pruneStr) {
  str = makeString(str);
  length = ~~length;
  pruneStr = pruneStr != null ? String(pruneStr) : '...';

  if (str.length <= length) return str;

  var tmpl = function(c) {
    return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';
  },
    template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'

  if (template.slice(template.length - 2).match(/\w\w/))
    template = template.replace(/\s*\S+$/, '');
  else
    template = rtrim(template.slice(0, template.length - 1));

  return (template + pruneStr).length > str.length ? str : str.slice(0, template.length) + pruneStr;
};

},{"./helper/makeString":20,"./rtrim":43}],38:[function(_dereq_,module,exports){
var surround = _dereq_('./surround');

module.exports = function quote(str, quoteChar) {
  return surround(str, quoteChar || '"');
};

},{"./surround":54}],39:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var strRepeat = _dereq_('./helper/strRepeat');

module.exports = function repeat(str, qty, separator) {
  str = makeString(str);

  qty = ~~qty;

  // using faster implementation if separator is not needed;
  if (separator == null) return strRepeat(str, qty);

  // this one is about 300x slower in Google Chrome
  for (var repeat = []; qty > 0; repeat[--qty] = str) {}
  return repeat.join(separator);
};

},{"./helper/makeString":20,"./helper/strRepeat":21}],40:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function replaceAll(str, find, replace, ignorecase) {
  var flags = (ignorecase === true)?'gi':'g';
  var reg = new RegExp(find, flags);

  return makeString(str).replace(reg, replace);
};

},{"./helper/makeString":20}],41:[function(_dereq_,module,exports){
var chars = _dereq_('./chars');

module.exports = function reverse(str) {
  return chars(str).reverse().join('');
};

},{"./chars":3}],42:[function(_dereq_,module,exports){
var pad = _dereq_('./pad');

module.exports = function rpad(str, length, padStr) {
  return pad(str, length, padStr, 'right');
};

},{"./pad":35}],43:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');
var nativeTrimRight = String.prototype.trimRight;

module.exports = function rtrim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp(characters + '+$'), '');
};

},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],44:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');
var trim = _dereq_('./trim');
var dasherize = _dereq_('./dasherize');

module.exports = function slugify(str) {
  var from  = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșšŝťțŭùúüűûñÿýçżźž",
      to    = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz",
      regex = new RegExp(defaultToWhiteSpace(from), 'g');

  str = makeString(str).toLowerCase().replace(regex, function(c){
    var index = from.indexOf(c);
    return to.charAt(index) || '-';
  });

  return trim(dasherize(str.replace(/[^\w\s-]/g, '-')), '-');
};

},{"./dasherize":8,"./helper/defaultToWhiteSpace":16,"./helper/makeString":20,"./trim":61}],45:[function(_dereq_,module,exports){
var chars = _dereq_('./chars');

module.exports = function splice(str, i, howmany, substr) {
  var arr = chars(str);
  arr.splice(~~i, ~~howmany, substr);
  return arr.join('');
};

},{"./chars":3}],46:[function(_dereq_,module,exports){
// sprintf() for JavaScript 0.7-beta1
// http://www.diveintojavascript.com/projects/javascript-sprintf
//
// Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>
// All rights reserved.
var strRepeat = _dereq_('./helper/strRepeat');
var toString = Object.prototype.toString;
var sprintf = (function() {
  function get_type(variable) {
    return toString.call(variable).slice(8, -1).toLowerCase();
  }

  var str_repeat = strRepeat;

  var str_format = function() {
    if (!str_format.cache.hasOwnProperty(arguments[0])) {
      str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
    }
    return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
  };

  str_format.format = function(parse_tree, argv) {
    var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
    for (i = 0; i < tree_length; i++) {
      node_type = get_type(parse_tree[i]);
      if (node_type === 'string') {
        output.push(parse_tree[i]);
      }
      else if (node_type === 'array') {
        match = parse_tree[i]; // convenience purposes only
        if (match[2]) { // keyword argument
          arg = argv[cursor];
          for (k = 0; k < match[2].length; k++) {
            if (!arg.hasOwnProperty(match[2][k])) {
              throw new Error(sprintf('[_.sprintf] property "%s" does not exist', match[2][k]));
            }
            arg = arg[match[2][k]];
          }
        } else if (match[1]) { // positional argument (explicit)
          arg = argv[match[1]];
        }
        else { // positional argument (implicit)
          arg = argv[cursor++];
        }

        if (/[^s]/.test(match[8]) && (get_type(arg) != 'number')) {
          throw new Error(sprintf('[_.sprintf] expecting number but found %s', get_type(arg)));
        }
        switch (match[8]) {
          case 'b': arg = arg.toString(2); break;
          case 'c': arg = String.fromCharCode(arg); break;
          case 'd': arg = parseInt(arg, 10); break;
          case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
          case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
          case 'o': arg = arg.toString(8); break;
          case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
          case 'u': arg = Math.abs(arg); break;
          case 'x': arg = arg.toString(16); break;
          case 'X': arg = arg.toString(16).toUpperCase(); break;
        }
        arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);
        pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
        pad_length = match[6] - String(arg).length;
        pad = match[6] ? str_repeat(pad_character, pad_length) : '';
        output.push(match[5] ? arg + pad : pad + arg);
      }
    }
    return output.join('');
  };

  str_format.cache = {};

  str_format.parse = function(fmt) {
    var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
    while (_fmt) {
      if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
        parse_tree.push(match[0]);
      }
      else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
        parse_tree.push('%');
      }
      else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
        if (match[2]) {
          arg_names |= 1;
          var field_list = [], replacement_field = match[2], field_match = [];
          if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
            field_list.push(field_match[1]);
            while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
              if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                field_list.push(field_match[1]);
              }
              else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
                field_list.push(field_match[1]);
              }
              else {
                throw new Error('[_.sprintf] huh?');
              }
            }
          }
          else {
            throw new Error('[_.sprintf] huh?');
          }
          match[2] = field_list;
        }
        else {
          arg_names |= 2;
        }
        if (arg_names === 3) {
          throw new Error('[_.sprintf] mixing positional and named placeholders is not (yet) supported');
        }
        parse_tree.push(match);
      }
      else {
        throw new Error('[_.sprintf] huh?');
      }
      _fmt = _fmt.substring(match[0].length);
    }
    return parse_tree;
  };

  return str_format;
})();

module.exports = sprintf;

},{"./helper/strRepeat":21}],47:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var toPositive = _dereq_('./helper/toPositive');

module.exports = function startsWith(str, starts, position) {
  str = makeString(str);
  starts = '' + starts;
  position = position == null ? 0 : Math.min(toPositive(position), str.length);
  return str.lastIndexOf(starts, position) === position;
};

},{"./helper/makeString":20,"./helper/toPositive":22}],48:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function strLeft(str, sep) {
  str = makeString(str);
  sep = makeString(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return~ pos ? str.slice(0, pos) : str;
};

},{"./helper/makeString":20}],49:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function strLeftBack(str, sep) {
  str = makeString(str);
  sep = makeString(sep);
  var pos = str.lastIndexOf(sep);
  return~ pos ? str.slice(0, pos) : str;
};

},{"./helper/makeString":20}],50:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function strRight(str, sep) {
  str = makeString(str);
  sep = makeString(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return~ pos ? str.slice(pos + sep.length, str.length) : str;
};

},{"./helper/makeString":20}],51:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function strRightBack(str, sep) {
  str = makeString(str);
  sep = makeString(sep);
  var pos = !sep ? -1 : str.lastIndexOf(sep);
  return~ pos ? str.slice(pos + sep.length, str.length) : str;
};

},{"./helper/makeString":20}],52:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function stripTags(str) {
  return makeString(str).replace(/<\/?[^>]+>/g, '');
};

},{"./helper/makeString":20}],53:[function(_dereq_,module,exports){
var adjacent = _dereq_('./helper/adjacent');

module.exports = function succ(str) {
  return adjacent(str, 1);
};

},{"./helper/adjacent":15}],54:[function(_dereq_,module,exports){
module.exports = function surround(str, wrapper) {
  return [wrapper, str, wrapper].join('');
};

},{}],55:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function swapCase(str) {
  return makeString(str).replace(/\S/g, function(c) {
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  });
};

},{"./helper/makeString":20}],56:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function titleize(str) {
  return makeString(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function(c) {
    return c.toUpperCase();
  });
};

},{"./helper/makeString":20}],57:[function(_dereq_,module,exports){
var trim = _dereq_('./trim');

function boolMatch(s, matchers) {
  var i, matcher, down = s.toLowerCase();
  matchers = [].concat(matchers);
  for (i = 0; i < matchers.length; i += 1) {
    matcher = matchers[i];
    if (!matcher) continue;
    if (matcher.test && matcher.test(s)) return true;
    if (matcher.toLowerCase() === down) return true;
  }
}

module.exports = function toBoolean(str, trueValues, falseValues) {
  if (typeof str === "number") str = "" + str;
  if (typeof str !== "string") return !!str;
  str = trim(str);
  if (boolMatch(str, trueValues || ["true", "1"])) return true;
  if (boolMatch(str, falseValues || ["false", "0"])) return false;
};

},{"./trim":61}],58:[function(_dereq_,module,exports){
var trim = _dereq_('./trim');

module.exports = function toNumber(num, precision) {
  if (num == null) return 0;
  var factor = Math.pow(10, isFinite(precision) ? precision : 0);
  return Math.round(num * factor) / factor;
};

},{"./trim":61}],59:[function(_dereq_,module,exports){
var rtrim = _dereq_('./rtrim');

module.exports = function toSentence(array, separator, lastSeparator, serial) {
  separator = separator || ', ';
  lastSeparator = lastSeparator || ' and ';
  var a = array.slice(),
    lastMember = a.pop();

  if (array.length > 2 && serial) lastSeparator = rtrim(separator) + lastSeparator;

  return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember;
};

},{"./rtrim":43}],60:[function(_dereq_,module,exports){
var toSentence = _dereq_('./toSentence');

module.exports = function toSentenceSerial(array, sep, lastSep) {
  return toSentence(array, sep, lastSep, true);
};

},{"./toSentence":59}],61:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');
var nativeTrim = String.prototype.trim;

module.exports = function trim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrim) return nativeTrim.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
};

},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],62:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function truncate(str, length, truncateStr) {
  str = makeString(str);
  truncateStr = truncateStr || '...';
  length = ~~length;
  return str.length > length ? str.slice(0, length) + truncateStr : str;
};

},{"./helper/makeString":20}],63:[function(_dereq_,module,exports){
var trim = _dereq_('./trim');

module.exports = function underscored(str) {
  return trim(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
};

},{"./trim":61}],64:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var htmlEntities = _dereq_('./helper/htmlEntities');

module.exports = function unescapeHTML(str) {
  return makeString(str).replace(/\&([^;]+);/g, function(entity, entityCode) {
    var match;

    if (entityCode in htmlEntities) {
      return htmlEntities[entityCode];
    } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
      return String.fromCharCode(parseInt(match[1], 16));
    } else if (match = entityCode.match(/^#(\d+)$/)) {
      return String.fromCharCode(~~match[1]);
    } else {
      return entity;
    }
  });
};

},{"./helper/htmlEntities":19,"./helper/makeString":20}],65:[function(_dereq_,module,exports){
module.exports = function unquote(str, quoteChar) {
  quoteChar = quoteChar || '"';
  if (str[0] === quoteChar && str[str.length - 1] === quoteChar)
    return str.slice(1, str.length - 1);
  else return str;
};

},{}],66:[function(_dereq_,module,exports){
var sprintf = _dereq_('./sprintf');

module.exports = function vsprintf(fmt, argv) {
  argv.unshift(fmt);
  return sprintf.apply(null, argv);
};

},{"./sprintf":46}],67:[function(_dereq_,module,exports){
var isBlank = _dereq_('./isBlank');
var trim = _dereq_('./trim');

module.exports = function words(str, delimiter) {
  if (isBlank(str)) return [];
  return trim(str, delimiter).split(delimiter || /\s+/);
};

},{"./isBlank":26,"./trim":61}]},{},[14])
(14)
});
define('utils/credit_card',[], function() {
    'use strict';

    return {
            /**
             * Most performant Luhn check for credit card number validity.
             * https://jsperf.com/credit-card-validator/7
             */
        isValidCardNumber: function(cardNumber) {
            var len = cardNumber.length,
                mul = 0,
                prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]],
                sum = 0;

            while (len) {
                len -= 1;
                sum += prodArr[mul][parseInt(cardNumber.charAt(len), 10)];
                mul ^= 1; // eslint-disable-line no-bitwise
            }

            return sum % 10 === 0 && sum > 0;
        },

            /**
             * Get the credit card type based on the card number.
             *
             * @param cardNumber (string) - The credit card number.
             *
             * @returns (object) - The credit card type name and CVN length.
             */
        getCreditCardType: function(cardNumber) {
            var key,
                matchers = {
                    amex: {
                        regex: /^3[47]\d{13}$/,
                        cvnLength: 4
                    },
                    discover: {
                        regex: /^(6011\d{2}|65\d{4}|64[4-9]\d{3}|62212[6-9]|6221[3-9]\d|622[2-8]\d{2}|6229[01]\d|62292[0-5])\d{10,13}$/,  // eslint-disable-line max-len
                        cvnLength: 3
                    },
                    mastercard: {
                        regex: /^(5[1-5]\d{2}|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/,
                        cvnLength: 3
                    },
                    visa: {
                        regex: /^(4\d{12}?(\d{3})?)$/,
                        cvnLength: 3
                    }
                };

            // eslint-disable-next-line no-restricted-syntax
            for (key in matchers) {
                if (matchers[key].regex.test(cardNumber)) {
                    return {
                        name: key,
                        cvnLength: matchers[key].cvnLength
                    };
                }
            }

            return undefined;
        }
    };
}
);

define('utils/key_codes',[],
    function() {
        'use strict';

        return {
            Tab: 9,
            Escape: 27
        };
    }
);

/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define('js-cookie',factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

/* jshint -W065 */
define('pages/basket_page',[
    'jquery',
    'underscore',
    'underscore.string',
    'utils/utils',
    'utils/credit_card',
    'utils/key_codes',
    'js-cookie'
],
    function($,
              _,
              _s,
              Utils,
              CreditCardUtils,
              KeyCodes,
              Cookies) {
        'use strict';

        var BasketPage = {
            hideVoucherForm: function() {
                $('#voucher_form_container').hide();
                $('#voucher_form_link').show();
            },

            onFail: function() {
                var message = gettext('Problem occurred during checkout. Please contact support.');
                $('#messages').html(_s.sprintf('<div class="alert alert-error">%s</div>', message));
            },

            onSuccess: function(data) {
                var $form = $('<form>', {
                    class: 'hidden',
                    action: data.payment_page_url,
                    method: 'POST',
                    'accept-method': 'UTF-8'
                });

                _.each(data.payment_form_data, function(value, key) {
                    $('<input>').attr({
                        type: 'hidden',
                        name: key,
                        value: value
                    }).appendTo($form);
                });

                $form.appendTo('body').submit();
            },

            checkoutPayment: function(data) {
                $.ajax({
                    url: '/api/v2/checkout/',
                    method: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    headers: {
                        'X-CSRFToken': Cookies.get('ecommerce_csrftoken')
                    },
                    data: JSON.stringify(data),
                    success: BasketPage.onSuccess,
                    error: BasketPage.onFail
                });
            },

            appendCardValidationErrorMsg: function(event, field, msg) {
                event.preventDefault();
                field.find('~.help-block').append('<span>' + msg + '</span>');
                field.focus();
                $('.payment-form').attr('data-has-error', true);
            },

            appendCardHolderValidationErrorMsg: function(field, msg) {
                field.parentsUntil('form-item').find('~.help-block').append(
                    '<span>' + msg + '</span>'
                );
            },

            cardHolderInfoValidation: function(event) {
                var requiredFields = [
                        'input[name=first_name]',
                        'input[name=last_name]',
                        'input[name=city]',
                        'input[name=organization]',
                        'select[name=country]'
                    ],
                    countriesWithRequiredStateAndPostalCodeValues = ['US', 'CA'],
                    experiments = window.experimentVariables || {};
                // Only require address and state if we are not in the hide location fields variation of this experiment
                // https://openedx.atlassian.net/browse/LEARNER-2355
                if (!(experiments && experiments.hide_location_fields)) {
                    requiredFields.push('input[name=address_line1]');
                    if (countriesWithRequiredStateAndPostalCodeValues.indexOf($('select[name=country]').val()) > -1) {
                        requiredFields.push('select[name=state]');
                        requiredFields.push('input[name=postal_code]');
                    }
                }

                _.each(requiredFields, function(field) {
                    if ($(field).val() === '') {
                        event.preventDefault();
                        BasketPage.appendCardHolderValidationErrorMsg($(field), gettext('This field is required'));
                        $('.payment-form').attr('data-has-error', true);
                    }
                });

                // Focus the first element that has an error message.
                $('.help-block > span')
                .first().parentsUntil('fieldset').last()
                .find('input')
                .focus();
            },

            isCardTypeSupported: function(cardType) {
                return $.inArray(cardType, ['amex', 'discover', 'mastercard', 'visa']) > -1;
            },

            cardInfoValidation: function(event) {
                var cardType,
                    // We are adding 1 here because month in js style date-time starts with 0
                    // i.e. 0 for JAN, 1 for FEB etc. However, credit card expiry months start with 1
                    // i.e 1 for JAN, 2 for FEB etc.
                    currentMonth = new Date().getMonth() + 1,
                    currentYear = new Date().getFullYear(),
                    $number = $('#card-number'),
                    $cvn = $('#card-cvn'),
                    $expMonth = $('#card-expiry-month'),
                    $expYear = $('#card-expiry-year'),
                    cardNumber = $number.val(),
                    cvnNumber = $cvn.val(),
                    cardExpiryMonth = $expMonth.val(),
                    cardExpiryYear = $expYear.val();

                cardType = CreditCardUtils.getCreditCardType(cardNumber);

                if (!CreditCardUtils.isValidCardNumber(cardNumber)) {
                    BasketPage.appendCardValidationErrorMsg(event, $number, gettext('Invalid card number'));
                } else if (_.isUndefined(cardType) || !BasketPage.isCardTypeSupported(cardType.name)) {
                    BasketPage.appendCardValidationErrorMsg(event, $number, gettext('Unsupported card type'));
                } else if (cvnNumber.length !== cardType.cvnLength || !Number.isInteger(Number(cvnNumber))) {
                    BasketPage.appendCardValidationErrorMsg(event, $cvn, gettext('Invalid security number'));
                }

                if (!Number.isInteger(Number(cardExpiryMonth)) ||
                    Number(cardExpiryMonth) > 12 || Number(cardExpiryMonth) < 1) {
                    BasketPage.appendCardValidationErrorMsg(event, $expMonth, gettext('Invalid month'));
                } else if (!Number.isInteger(Number(cardExpiryYear)) || Number(cardExpiryYear) < currentYear) {
                    BasketPage.appendCardValidationErrorMsg(event, $expYear, gettext('Invalid year'));
                } else if (Number(cardExpiryMonth) < currentMonth && Number(cardExpiryYear) === currentYear) {
                    BasketPage.appendCardValidationErrorMsg(event, $expMonth, gettext('Card expired'));
                }
            },

            showErrorState: function(e, msg) {
                e.preventDefault();
                $('#input-quantity-field').addClass('error-state');
                $('div#error-msg').text(gettext(msg));
            },

            validateQuantity: function(e) {
                var inputQuantity = $('#input-quantity-field').val();
                var quantity = isNaN(parseInt(inputQuantity, 10)) ? '' : parseInt(inputQuantity, 10);
                if (quantity === '') {
                    this.showErrorState(e, 'Please enter a quantity from 1 to 100.');
                } else if (quantity > 100) {
                    this.showErrorState(e, 'Quantity must be less than or equal to 100.');
                } else if (quantity < 1) {
                    this.showErrorState(e, 'Quantity must be greater than or equal to 1.');
                }
            },

            detectCreditCard: function() {
                var card,
                    $input = $('#card-number'),
                    cardNumber = $input.val().replace(/\s+/g, ''),
                    iconPath = '/static/images/credit_cards/';

                if (cardNumber.length > 12) {
                    card = CreditCardUtils.getCreditCardType(cardNumber);

                    if (!CreditCardUtils.isValidCardNumber(cardNumber)) {
                        $('.card-type-icon').attr('src', '').addClass('hidden');
                        return;
                    }

                    if (typeof card !== 'undefined') {
                        $('.card-type-icon').attr(
                            'src',
                            iconPath + card.name + '.png'
                        ).removeClass('hidden');
                        $input.trigger('cardType:detected', {type: card.name});
                    } else {
                        $('.card-type-icon').attr('src', '').addClass('hidden');
                    }
                } else {
                    $('.card-type-icon').attr('src', '').addClass('hidden');
                }
            },

            sdnCheck: function(event) {
                var firstName = $('input[name=first_name]').val(),
                    lastName = $('input[name=last_name]').val(),
                    city = $('input[name=city]').val(),
                    country = $('select[name=country]').val();

                $.ajax({
                    url: '/api/v2/sdn/search/',
                    method: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    headers: {
                        'X-CSRFToken': Cookies.get('ecommerce_csrftoken')
                    },
                    data: JSON.stringify({
                        name: _s.sprintf('%s %s', firstName, lastName),
                        city: city,
                        country: country
                    }),
                    async: false,
                    success: function(data) {
                        if (data.hits > 0) {
                            event.preventDefault();
                            Utils.redirect('/payment/sdn/failure/');
                        }
                    }
                });
            },

            showVoucherForm: function() {
                $('#voucher_form_container').show();
                $('#voucher_form_link').hide();
                $('#id_code').focus();
            },

            showCvvTooltip: function() {
                $('#cvvtooltip').show();
                $('#card-cvn-help').attr({
                    'aria-haspopup': 'false',
                    'aria-expanded': 'true'
                });
            },

            hideCvvTooltip: function() {
                $('#cvvtooltip').hide();
                $('#card-cvn-help').attr({
                    'aria-haspopup': 'true',
                    'aria-expanded': 'false'
                });
            },

            toggleCvvTooltip: function() {
                var $cvnHelpButton = $('#card-cvn-help');
                $('#cvvtooltip').toggle();
                $cvnHelpButton.attr({
                    'aria-haspopup': $cvnHelpButton.attr('aria-haspopup') === 'true' ? 'false' : 'true',
                    'aria-expanded': $cvnHelpButton.attr('aria-expanded') === 'true' ? 'false' : 'true'
                });
            },

            isValidLocalCurrencyCookie: function(cookie) {
                return !!cookie && !!cookie.countryCode && !!cookie.symbol && !!cookie.rate && !!cookie.code;
            },

            addPriceDisclaimer: function() {
                var price = $('#basket-total').find('> .price').text(),
                    countryData = Cookies.getJSON('edx-price-l10n'),
                    disclaimerPrefix;

                // when the price value has a USD prefix, replace it with a $
                price = price.replace('USD', '$');
                disclaimerPrefix = '* This total contains an approximate conversion. You will be charged ';

                if (BasketPage.isValidLocalCurrencyCookie(countryData) && countryData.countryCode !== 'USA') {
                    $('<span>').attr('class', 'price-disclaimer')
                        .text(gettext(disclaimerPrefix) + price + ' USD.')
                        .appendTo('div[aria-labelledby="order-details-region"]');
                }
            },

            formatToLocalPrice: function(prefix, priceInUsd) {
                var countryData = Cookies.getJSON('edx-price-l10n'),
                    parsedPriceInUsd;

                // Default to USD when the exchange rate cookie doesn't exist
                if (BasketPage.isValidLocalCurrencyCookie(countryData) && countryData.countryCode !== 'USA') {
                    // assumes all formatted prices have a comma every three places
                    parsedPriceInUsd = parseFloat(priceInUsd.replace(',', ''));
                    return countryData.symbol + Math.round(parsedPriceInUsd * countryData.rate).toLocaleString() + ' '
                        + countryData.code + ' *';
                } else {
                    return prefix + priceInUsd;
                }
            },

            generateLocalPriceText: function(usdPriceText) {
                // Assumes price value is prefixed by $ or USD with optional sign followed by optional string
                var localPriceText = usdPriceText,
                    prefixMatch = localPriceText.match(/(\$|USD)?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?\.[0-9]{1,2}/),
                    entireMatch,
                    groupMatch,
                    startIndex,
                    priceValue;

                if (prefixMatch) {
                    entireMatch = prefixMatch[0];
                    groupMatch = prefixMatch[1];
                    startIndex = prefixMatch.index;
                    priceValue = localPriceText
                      .substring(startIndex + groupMatch.length, startIndex + entireMatch.length);

                    localPriceText = localPriceText
                        .replace(entireMatch, BasketPage.formatToLocalPrice(groupMatch, priceValue));
                }

                return localPriceText;
            },

            replaceElementText: function(element, text) {
                if (element.text() !== text) {
                    element.text(text);
                }
            },

            translateToLocalPrices: function() {
                var translatedItemPrices = [],
                    translatedVoucherPrices = [],
                    $prices = $('.price'),
                    $vouchers = $('.voucher');

                // Generate all local price text values
                $prices.each(function() {
                    translatedItemPrices.push(BasketPage.generateLocalPriceText($(this).text()));
                });

                $vouchers.each(function() {
                    translatedVoucherPrices.push(BasketPage.generateLocalPriceText($(this).text()));
                });

                // Replace local price text values
                if ($prices.length === translatedItemPrices.length
                    && $vouchers.length === translatedVoucherPrices.length) {
                    // Add price disclaimer after all translated values have been calculated
                    BasketPage.addPriceDisclaimer();

                    $prices.each(function(index, element) {
                        BasketPage.replaceElementText($(element), translatedItemPrices[index]);
                    });

                    $vouchers.each(function(index, element) {
                        BasketPage.replaceElementText($(element), translatedVoucherPrices[index]);
                    });
                }
            },

            onReady: function() {
                var $paymentButtons = $('.payment-buttons'),
                    basketId = $paymentButtons.data('basket-id');

                Utils.toogleMobileMenuClickEvent();

                $(document).keyup(function(e) {
                    switch (e.which) {
                    case KeyCodes.Escape:
                        BasketPage.hideCvvTooltip();
                        break;
                    case KeyCodes.Tab:
                        if ($('#card-cvn-help').is(':focus')) {
                            BasketPage.showCvvTooltip();
                        }
                        break;
                    default:
                        break;
                    }
                });

                $('#card-cvn-help').on('click touchstart', function(event) {
                    event.preventDefault();
                    BasketPage.toggleCvvTooltip();
                });

                $('#card-cvn-help').blur(BasketPage.hideCvvTooltip)
                    .hover(BasketPage.showCvvTooltip, BasketPage.hideCvvTooltip);

                $('#voucher_form_link').on('click', function(event) {
                    event.preventDefault();
                    BasketPage.showVoucherForm();
                });

                $('#voucher_form_cancel').on('click', function(event) {
                    event.preventDefault();
                    BasketPage.hideVoucherForm();
                });

                $('select[name=country]').on('change', function() {
                    var country = $('select[name=country]').val(),
                        $inputDiv = $('#div_id_state .controls'),
                        states = {
                            US: {
                                Alabama: 'AL',
                                Alaska: 'AK',
                                American: 'AS',
                                Arizona: 'AZ',
                                Arkansas: 'AR',
                                California: 'CA',
                                Colorado: 'CO',
                                Connecticut: 'CT',
                                Delaware: 'DE',
                                'Dist. of Columbia': 'DC',
                                Florida: 'FL',
                                Georgia: 'GA',
                                Guam: 'GU',
                                Hawaii: 'HI',
                                Idaho: 'ID',
                                Illinois: 'IL',
                                Indiana: 'IN',
                                Iowa: 'IA',
                                Kansas: 'KS',
                                Kentucky: 'KY',
                                Louisiana: 'LA',
                                Maine: 'ME',
                                Maryland: 'MD',
                                'Marshall Islands': 'MH',
                                Massachusetts: 'MA',
                                Michigan: 'MI',
                                Micronesia: 'FM',
                                Minnesota: 'MN',
                                Mississippi: 'MS',
                                Missouri: 'MO',
                                Montana: 'MT',
                                Nebraska: 'NE',
                                Nevada: 'NV',
                                'New Hampshire': 'NH',
                                'New Jersey': 'NJ',
                                'New Mexico': 'NM',
                                'New York': 'NY',
                                'North Carolina': 'NC',
                                'North Dakota': 'ND',
                                'Northern Marianas': 'MP',
                                Ohio: 'OH',
                                Oklahoma: 'OK',
                                Oregon: 'OR',
                                Palau: 'PW',
                                Pennsylvania: 'PA',
                                'Puerto Rico': 'PR',
                                'Rhode Island': 'RI',
                                'South Carolina': 'SC',
                                'South Dakota': 'SD',
                                Tennessee: 'TN',
                                Texas: 'TX',
                                Utah: 'UT',
                                Vermont: 'VT',
                                Virginia: 'VA',
                                'Virgin Islands': 'VI',
                                Washington: 'WA',
                                'West Virginia': 'WV',
                                Wisconsin: 'WI',
                                Wyoming: 'WY'
                            },
                            CA: {
                                Alberta: 'AB',
                                'British Columbia': 'BC',
                                Manitoba: 'MB',
                                'New Brunswick': 'NB',
                                'Newfoundland and Labrador': 'NL',
                                'Northwest Territories': 'NT',
                                'Nova Scotia': 'NS',
                                Nunavut: 'NU',
                                Ontario: 'ON',
                                'Prince Edward Island': 'PE',
                                Quebec: 'QC',
                                Saskatchewan: 'SK',
                                Yukon: 'YT'
                            }
                        },
                        experiments = window.experimentVariables || {},
                        selectorRequired = 'aria-required="true" required',
                        stateSelector = '<select name="state" class="select form-control" id="id_state"';

                    if (country === 'US' || country === 'CA') {
                        $($inputDiv).empty();
                        // Only require state if we are not in the hide location fields variation of this experiment
                        // https://openedx.atlassian.net/browse/LEARNER-2355
                        stateSelector += !(experiments && experiments.hide_location_fields) ? selectorRequired : '';
                        stateSelector += '></select>';
                        $($inputDiv).append(stateSelector);
                        $('#id_state').append($('<option>', {value: '', text: gettext('<Choose state/province>')}));
                        $('#div_id_state').find('label').text(gettext('State/Province (required)'));

                        _.each(states[country], function(value, key) {
                            $('#id_state').append($('<option>', {value: value, text: key}));
                        });
                    } else {
                        $($inputDiv).empty();
                        $('#div_id_state').find('label').text('State/Province');
                        // In order to change the maxlength attribute, the same needs to be changed in the Django form.
                        $($inputDiv).append(
                            '<input class="textinput textInput form-control" id="id_state"' +
                            'maxlength="60" name="state" type="text">'
                        );
                    }
                });

                $('#card-number').on('input', function() {
                    BasketPage.detectCreditCard();
                });

                $('#quantity-update').on('click', function(e) {
                    BasketPage.validateQuantity(e);
                });

                $('#payment-button').click(function(e) {
                    _.each($('.help-block'), function(errorMsg) {
                        $(errorMsg).empty();  // Clear existing validation error messages.
                    });
                    $('.payment-form').attr('data-has-error', false);
                    if ($('#card-number').val()) {
                        BasketPage.detectCreditCard();
                    }
                    BasketPage.cardInfoValidation(e);
                    BasketPage.cardHolderInfoValidation(e);
                    if ($('input[name=sdn-check]').val() === 'enabled' && !$('.payment-form').data('has-error')) {
                        BasketPage.sdnCheck(e);
                    }
                });

                // NOTE: We only include buttons that have a data-processor-name attribute because we don't want to
                // go through the standard checkout process for some payment methods (e.g. Apple Pay).
                $paymentButtons.find('.payment-button[data-processor-name]').click(function(e) {
                    var $btn = $(e.target),
                        deferred = new $.Deferred(),
                        promise = deferred.promise(),
                        paymentProcessor = $btn.data('processor-name'),
                        data = {
                            basket_id: basketId,
                            payment_processor: paymentProcessor
                        };

                    Utils.disableElementWhileRunning($btn, function() {
                        return promise;
                    });
                    BasketPage.checkoutPayment(data);
                });

                // Increment the quantity field until max
                $('.spinner .btn:first-of-type').on('click', function() {
                    var $btn = $(this),
                        input = $btn.closest('.spinner').find('input'),
                        max = input.attr('max');

                    // Stop if max attribute is defined and value is reached to given max value
                    if (_.isUndefined(max) || parseInt(input.val(), 10) < parseInt(max, 10)) {
                        input.val(parseInt(input.val(), 10) + 1);
                    } else {
                        $btn.next('disabled', true);
                    }
                });

                // Decrement the quantity field until min
                $('.spinner .btn:last-of-type').on('click', function() {
                    var $btn = $(this),
                        input = $btn.closest('.spinner').find('input'),
                        min = input.attr('min');

                    // Stop if min attribute is defined and value is reached to given min value
                    if (_.isUndefined(min) || parseInt(input.val(), 10) > parseInt(min, 10)) {
                        input.val(parseInt(input.val(), 10) - 1);
                    } else {
                        $btn.prev('disabled', true);
                    }
                });

                try {
                    // local currency translation
                    BasketPage.translateToLocalPrices();
                } catch (e) {} // eslint-disable-line no-empty
            }
        };

        return BasketPage;
    }
);

require([
    'jquery',
    'pages/basket_page'
],
    function($,
              BasketPage) {
        'use strict';

        $(document).ready(function() {
            BasketPage.onReady();
        });
    }
);

define("js/apps/basket_app", function(){});

