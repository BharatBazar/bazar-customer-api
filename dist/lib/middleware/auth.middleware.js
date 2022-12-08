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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleAuthorization = exports.AdminAuthorization = exports.Authorization = void 0;
var httpErrors_1 = require("../utils/httpErrors");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = require("../../config");
var Authorization = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token;
    return __generator(this, function (_a) {
        try {
            if (req.header('Authorization')) {
                token = req.header('Authorization') || '';
                // const data: IShopModel = (await handleToken(token)) || '';
                // if (data) {
                // req.userId = data._id;
                // req.role = data.role;
                // req.token = token.split(' ')[1];
                next();
                //   }
            }
            else if (req.header('escapeAuth')) {
                next();
            }
            else {
                throw new httpErrors_1.HTTP401Error('You are not authorized', 'You may have not passed the authorization key in header');
            }
        }
        catch (e) {
            e = new httpErrors_1.HTTP401Error(e.message, 'You may have not passed the authorization key in header');
            next(e);
        }
        return [2 /*return*/];
    });
}); };
exports.Authorization = Authorization;
var AdminAuthorization = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            // if (req.role === 'admin') {
            next();
            // } else {
            //     throw new HTTP401Error('Incorrect Role for Request. Your Role : ' + req.role);
            // }
        }
        catch (e) {
            e = new httpErrors_1.HTTP401Error(e.message);
            next(e);
        }
        return [2 /*return*/];
    });
}); };
exports.AdminAuthorization = AdminAuthorization;
var RoleAuthorization = function (role) { return function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            // if (req.role === 'admin' || req.role === role) {
            next();
            // } else {
            //     throw new HTTP401Error('Incorrect Role for Request. Your Role : ' + req.role);
            // }
        }
        catch (e) {
            e = new httpErrors_1.HTTP401Error(e.message);
            next(e);
        }
        return [2 /*return*/];
    });
}); }; };
exports.RoleAuthorization = RoleAuthorization;
var handleToken = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var userData, userDetails;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!token) return [3 /*break*/, 2];
                token = token.split(' ')[1];
                return [4 /*yield*/, jsonwebtoken_1.default.verify(token, config_1.commonConfig.jwtSecretKey)];
            case 1:
                userData = (_a.sent()) || { user: {} };
                userDetails = userData.user;
                return [3 /*break*/, 3];
            case 2: throw new Error('You are not authorized user');
            case 3: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=auth.middleware.js.map