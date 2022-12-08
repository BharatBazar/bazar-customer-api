"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = void 0;
var chalk = __importStar(require("chalk"));
var util_1 = require("util");
var red = chalk.default.redBright;
var green = chalk.default.greenBright;
var yellow = chalk.default.yellowBright;
var cyan = chalk.default.cyanBright.bold;
var bgRed = chalk.default.bgRedBright;
var bgGreen = chalk.default.bgGreenBright;
var bgYellow = chalk.default.bgYellow;
var requestLogger = function (req, res, next) {
    (0, util_1.log)(green("".concat(req.method, " ").concat(req.originalUrl)));
    var start = new Date().getTime();
    res.on('finish', function () {
        var elapsed = new Date().getTime() - start;
        reqConsoleLogger({
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            time: elapsed,
        });
    });
    next();
};
exports.requestLogger = requestLogger;
var reqConsoleLogger = function (logValue) {
    var status = logValue.status, method = logValue.method, url = logValue.url, time = logValue.time;
    if (status < 400) {
        (0, util_1.log)(green("".concat(method, " ").concat(url, " -> ")) + bgGreen("".concat(status)) + cyan(" ".concat(time, "ms")));
    }
    else if (status < 500) {
        (0, util_1.log)(yellow("".concat(method, " ").concat(url, " -> ")) + bgYellow("".concat(status)) + cyan(" ".concat(time, "ms")));
    }
    else {
        (0, util_1.log)(red("".concat(method, " ").concat(url, " -> ")) + bgRed("".concat(status)) + cyan(" ".concat(time, "ms")));
    }
};
//# sourceMappingURL=requestLogger.js.map