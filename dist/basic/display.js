"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
var Display;
(function (Display) {
    Display.isDisplay = (obj) => {
        if (obj === undefined || obj === null)
            return false;
        return obj.isDisplay === true && typeof obj.display === 'function' && obj.display.length === 0;
    };
    Display.display = (obj) => {
        if (obj === undefined)
            return 'undefined';
        if (obj === null)
            return 'null';
        if (Array.isArray(obj))
            return `[${obj.reduce((acc, item) => acc ? `${acc},${Display.display(item)}` : Display.display(item), '')}]`;
        if (typeof obj === 'string')
            return `"${obj}"`;
        if (Display.isDisplay(obj))
            return obj.display();
        if (typeof obj === 'object')
            return `{${Object.entries(obj).reduce((acc, [k, v]) => acc ? `${acc},${k}:${Display.display(v)}` : `${k}:${Display.display(v)}`, '')}}`;
        return `${obj}`;
    };
})(Display = exports.Display || (exports.Display = {}));
