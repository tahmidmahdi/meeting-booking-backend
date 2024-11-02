"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const responseFilter_1 = __importDefault(require("../../utils/responseFilter"));
const users_model_1 = require("../users/users.model");
const auth_utils_1 = __importDefault(require("./auth.utils"));
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //   check if the user does exist
    const user = yield users_model_1.User.isUserExistByEmail(payload.email);
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This user is invalid');
    }
    //   check if the user is already deleted
    if (user.isDeleted) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, 'This user is invalid');
    }
    //   check if password matched?
    const isPasswordMatched = yield users_model_1.User.isPasswordMatched(payload.password, user.password);
    if (!isPasswordMatched) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, 'Password does not matched');
    }
    //   Access granted: Send accessToken & refreshToken
    const jwtPayload = {
        email: user.email,
        role: user.role,
    };
    const accessToken = (0, auth_utils_1.default)(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_access_expires_in);
    const refreshToken = (0, auth_utils_1.default)(jwtPayload, config_1.default.jwt_refresh_secret, config_1.default.jwt_refresh_expires_in);
    const filteredUser = (0, responseFilter_1.default)(user);
    return {
        accessToken,
        refreshToken,
        data: filteredUser,
    };
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    if (!token) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized');
    }
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_refresh_secret);
    const { email, role } = decoded;
    const user = yield users_model_1.User.isUserExistByEmail(email);
    if (!user) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, 'Invalid User');
    }
    if (user.isDeleted) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, 'This user is deleted');
    }
    const jwtPayload = {
        email,
        role,
    };
    const accessToken = (0, auth_utils_1.default)(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_refresh_expires_in);
    return {
        accessToken,
    };
});
exports.AuthServices = {
    loginUser,
    refreshToken,
};
