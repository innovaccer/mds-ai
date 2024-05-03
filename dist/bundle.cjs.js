'use strict';

var React = require('react');
var classNames = require('classnames');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".Button-module_Button__DgtNz {\n  padding: var(--spacing) var(--spacing-l);\n  border-radius: var(--spacing-m);\n  cursor: pointer;\n  border: 0;\n  font-family: var(--font-family);\n  font-weight: var(--font-weight-normal);\n  font-size: var(--font-size);\n  line-height: var(--font-height-s);\n}\n\n.Button-module_Button__DgtNz:disabled {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n/* Primary Button */\n\n.Button-module_Button--primary__LEyJb {\n  background: var(--primary);\n  color: var(--white);\n}\n\n.Button-module_Button--primary__LEyJb:hover {\n  background: var(--primary-dark);\n}\n\n.Button-module_Button--primary__LEyJb:active {\n  background: var(--primary-darker);\n}\n\n.Button-module_Button--primary__LEyJb:disabled {\n  background: var(--primary-lighter);\n}\n\n.Button-module_Button--primary__LEyJb:focus {\n  box-shadow: var(--shadow-spread) var(--primary-shadow);\n}\n\n/* Basic Button */\n\n.Button-module_Button--basic__4h93p {\n  background: var(--secondary-light);\n  color: var(--inverse);\n}\n\n.Button-module_Button--basic__4h93p:hover {\n  background: var(--secondary);\n}\n\n.Button-module_Button--basic__4h93p:active {\n  background: var(--secondary-dark);\n}\n\n.Button-module_Button--basic__4h93p:disabled {\n  background: var(--secondary-lighter);\n}\n\n.Button-module_Button--basic__4h93p:focus {\n  box-shadow: var(--shadow-spread) var(--secondary-shadow);\n}\n";
var styles$2 = {"Button":"Button-module_Button__DgtNz","Button--primary":"Button-module_Button--primary__LEyJb","Button--basic":"Button-module_Button--basic__4h93p"};
styleInject(css_248z$2);

var Button = function (props) {
    var _a;
    var appearance = props.appearance, className = props.className, label = props.label, children = props.children, rest = __rest(props, ["appearance", "className", "label", "children"]);
    var buttonClassNames = classNames((_a = {},
        _a[styles$2.Button] = true,
        _a[styles$2["Button--primary"]] = appearance === "primary",
        _a[styles$2["Button--basic"]] = appearance === "basic",
        _a), className);
    return (React__namespace.createElement("button", __assign({ className: buttonClassNames, "data-test": "DesignSystem-AI-Button" }, rest), label || children));
};
Button.defaultProps = {
    appearance: 'basic'
};

var css_248z$1 = ".IconButton-module_IconButton__VDnvS {\n  background: transparent;\n  padding: var(--spacing);\n  border-radius: var(--spacing-m);\n  cursor: pointer;\n  border: 0;\n  font-family: var(--font-family);\n  font-weight: var(--font-weight-normal);\n  font-size: var(--font-size);\n  line-height: var(--font-height-s);\n}\n\n.IconButton-module_IconButton__VDnvS:hover {\n  background: var(--secondary);\n}\n\n.IconButton-module_IconButton__VDnvS:active {\n  background: var(--secondary-dark);\n}\n\n.IconButton-module_IconButton__VDnvS:focus {\n  box-shadow: var(--shadow-spread) var(--secondary-shadow);\n}\n\n.IconButton-module_IconButton__VDnvS:disabled {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n.IconButton-module_IconButton--selected__NRagX {\n  background: var(--primary-lightest);\n}\n\n.IconButton-module_IconButton--round__nPBkY {\n  border-radius: 50%;\n}\n";
var styles$1 = {"IconButton":"IconButton-module_IconButton__VDnvS","IconButton--selected":"IconButton-module_IconButton--selected__NRagX","IconButton--round":"IconButton-module_IconButton--round__nPBkY"};
styleInject(css_248z$1);

var IconButton = function (props) {
    var _a;
    var icon = props.icon, selected = props.selected; props.position; var shape = props.shape, className = props.className, rest = __rest(props, ["icon", "selected", "position", "shape", "className"]);
    var buttonClassNames = classNames((_a = {},
        _a[styles$1.IconButton] = true,
        _a[styles$1["IconButton--round"]] = shape === 'round',
        _a[styles$1["IconButton--selected"]] = selected,
        _a), className);
    return (React__namespace.createElement("button", __assign({ className: buttonClassNames, "data-test": "DesignSystem-AI-IconButton" }, rest),
        icon,
        "aa"));
};

var img = "data:image/svg+xml,%3csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_3314_32121)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.1898 55.9227C13.7816 57.1861 8.66759 55.5682 6.05421 51.0432L2.53533 44.9454C-0.0780511 40.4204 1.0788 35.1799 4.37855 31.9957C1.0788 28.8114 -0.0780511 23.5742 2.53533 19.046L6.05421 12.9482C8.66759 8.42323 13.7816 6.80532 18.1898 8.07193C19.2983 3.62107 23.2555 -0.00149536 28.479 -0.00149536H35.52C40.7468 -0.00149536 44.7039 3.62107 45.8124 8.07193C50.2174 6.80532 55.3314 8.42323 57.9448 12.9482L61.4669 19.046C64.0771 23.5742 62.9202 28.8114 59.6237 31.9957C62.9202 35.1799 64.0771 40.4204 61.4637 44.9454L57.9448 51.0432C55.3314 55.5682 50.2174 57.1861 45.8124 55.9227C44.7039 60.3703 40.7468 63.9929 35.52 63.9929H28.479C23.2555 63.9929 19.2983 60.3703 18.1898 55.9227Z' fill='url(%23paint0_linear_3314_32121)'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 32C23.0457 32 32 23.0457 32 12C32 23.0457 40.9543 32 52 32C40.9543 32 32 40.9543 32 52C32 40.9543 23.0457 32 12 32Z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear_3314_32121' x1='18.99' y1='0.239091' x2='41.9606' y2='54.7321' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFC208'/%3e%3cstop offset='1' stop-color='%23E31C79'/%3e%3c/linearGradient%3e%3cclipPath id='clip0_3314_32121'%3e%3crect width='64' height='64' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

var Avatar = function (props) {
    var width = props.width, height = props.height, alt = props.alt, size = props.size, rest = __rest(props, ["width", "height", "alt", "size"]);
    var sizeMapping = {
        'regular': 32,
        'medium': 48,
        'large': 64
    };
    var avatarWidth = (size && sizeMapping[size]) || width;
    var avatarHeight = (size && sizeMapping[size]) || height;
    return (React__namespace.createElement("img", __assign({ src: img, alt: alt, width: avatarWidth, height: avatarHeight, "data-test": "DesignSystem-AI-Avatar" }, rest)));
};
Avatar.defaultProps = {
    width: 32,
    height: 32,
};

var css_248z = ".Text-module_Text__WeNB4 {\n  font-weight: var(--font-weight-normal);\n  line-height: var(--font-height);\n  font-size: var(--font-size);\n  background: linear-gradient(90deg, #595959, #C5C5C5, #C5C5C5, #595959);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-family: var(--font-family);;\n  display: inline-block;\n  vertical-align: middle;\n}\n";
var styles = {"Text":"Text-module_Text__WeNB4"};
styleInject(css_248z);

var Text = function (props) {
    var _a;
    var children = props.children, className = props.className, rest = __rest(props, ["children", "className"]);
    var TextClassNames = classNames((_a = {},
        _a[styles.Text] = true,
        _a), className);
    return (React__namespace.createElement("span", __assign({ "data-test": "DesignSystem-AI-Text", className: TextClassNames }, rest), children));
};

exports.Avatar = Avatar;
exports.Button = Button;
exports.IconButton = IconButton;
exports.Text = Text;
//# sourceMappingURL=bundle.cjs.js.map
