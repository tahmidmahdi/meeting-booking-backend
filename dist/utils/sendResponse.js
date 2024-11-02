"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseFilter_1 = __importDefault(require("./responseFilter"));
const sendResponse = (res, payload) => {
    const { statusCode, success, message, data } = payload;
    res.status(statusCode).json({
        statusCode,
        success,
        message,
        data: (0, responseFilter_1.default)(data),
    });
};
exports.default = sendResponse;
