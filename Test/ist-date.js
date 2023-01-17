"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.istDate = void 0;
const istDate = function () {
    let datev = new Date().getTime() + 5.5 * 3600 * 1000;
    return new Date(datev);
};
exports.istDate = istDate;
