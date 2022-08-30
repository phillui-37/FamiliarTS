"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.remove = function (pattern) {
    return this.replaceAll(pattern, '');
};
