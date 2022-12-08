"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP409Error = exports.HTTP404Error = exports.HTTP403Error = exports.HTTP401Error = exports.HTTP200Error = exports.HTTP400Error = exports.HTTPClientError = void 0;
var HTTPClientError = /** @class */ (function (_super) {
    __extends(HTTPClientError, _super);
    function HTTPClientError(message, description) {
        var _this = this;
        if (message instanceof Object) {
            _this = _super.call(this, JSON.stringify(message)) || this;
        }
        else {
            _this = _super.call(this, message) || this;
        }
        _this.name = _this.constructor.name;
        _this.description = description;
        Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }
    return HTTPClientError;
}(Error));
exports.HTTPClientError = HTTPClientError;
// tslint:disable-next-line: max-classes-per-file
var HTTP400Error = /** @class */ (function (_super) {
    __extends(HTTP400Error, _super);
    function HTTP400Error(message, description) {
        if (message === void 0) { message = 'Bad Request'; }
        var _this = _super.call(this, message, description) || this;
        _this.statusCode = 400;
        return _this;
    }
    return HTTP400Error;
}(HTTPClientError));
exports.HTTP400Error = HTTP400Error;
// tslint:disable-next-line: max-classes-per-file
var HTTP200Error = /** @class */ (function (_super) {
    __extends(HTTP200Error, _super);
    function HTTP200Error(message, description) {
        if (message === void 0) { message = 'Result not found'; }
        var _this = _super.call(this, message, description) || this;
        _this.statusCode = 200;
        return _this;
    }
    return HTTP200Error;
}(HTTPClientError));
exports.HTTP200Error = HTTP200Error;
// tslint:disable-next-line: max-classes-per-file
var HTTP401Error = /** @class */ (function (_super) {
    __extends(HTTP401Error, _super);
    function HTTP401Error(message, description) {
        if (message === void 0) { message = 'Unauthorized'; }
        var _this = _super.call(this, message, description) || this;
        _this.statusCode = 401;
        return _this;
    }
    return HTTP401Error;
}(HTTPClientError));
exports.HTTP401Error = HTTP401Error;
// tslint:disable-next-line: max-classes-per-file
var HTTP403Error = /** @class */ (function (_super) {
    __extends(HTTP403Error, _super);
    function HTTP403Error(message, description) {
        if (message === void 0) { message = 'Forbidden'; }
        var _this = _super.call(this, message, description) || this;
        _this.statusCode = 403;
        return _this;
    }
    return HTTP403Error;
}(HTTPClientError));
exports.HTTP403Error = HTTP403Error;
// tslint:disable-next-line: max-classes-per-file
var HTTP404Error = /** @class */ (function (_super) {
    __extends(HTTP404Error, _super);
    function HTTP404Error(message, description) {
        if (message === void 0) { message = 'Not found'; }
        var _this = _super.call(this, message, description) || this;
        _this.statusCode = 404;
        return _this;
    }
    return HTTP404Error;
}(HTTPClientError));
exports.HTTP404Error = HTTP404Error;
// tslint:disable-next-line: max-classes-per-file
var HTTP409Error = /** @class */ (function (_super) {
    __extends(HTTP409Error, _super);
    function HTTP409Error(message, description) {
        if (message === void 0) { message = 'Conflict'; }
        var _this = _super.call(this, message, description) || this;
        _this.statusCode = 409;
        return _this;
    }
    return HTTP409Error;
}(HTTPClientError));
exports.HTTP409Error = HTTP409Error;
//# sourceMappingURL=httpErrors.js.map