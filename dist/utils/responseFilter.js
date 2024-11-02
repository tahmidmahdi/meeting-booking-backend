"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseFilter = (data) => {
    const filteredKeys = ['_id', 'password', '__v'];
    filteredKeys.forEach((key) => {
        if (key in data) {
            data[key] = undefined;
        }
    });
    return data;
};
exports.default = responseFilter;
