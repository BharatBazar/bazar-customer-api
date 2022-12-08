"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLimiter = exports.handleCompression = exports.reqConsoleLogger = exports.handleBodyRequestParsing = exports.allowCors = exports.useHelmet = void 0;
// It allows the other custom domain or other address to access resource outside the domain from which the first resource was served.
var cors_1 = __importDefault(require("cors"));
// The middleware will attempt to compress response bodies for all request that traverse through the middleware, based on the given options.
// This middleware will never compress responses that include a Cache-Control header with the no-transform directive, as compressing will transform the body.
var compression_1 = __importDefault(require("compression"));
// Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
var helmet_1 = __importDefault(require("helmet"));
//Basic rate-limiting middleware for Express. Use to limit repeated requests to public APIs and/or endpoints such as password reset.
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// calling body-parser to handle the Request Object from POST requests
var body_parser_1 = __importDefault(require("body-parser"));
/* Add more usefull middleware if needed */
var requestLogger_1 = require("../utils/requestLogger");
var config_1 = require("../../config");
var useHelmet = function (router) {
    router.use((0, helmet_1.default)());
};
exports.useHelmet = useHelmet;
var allowCors = function (router) {
    router.use((0, cors_1.default)({
        origin: function (origin, callback) {
            if (!origin) {
                return callback(null, true);
            }
            if (config_1.configCors.allowOrigin.indexOf(origin) === -1) {
                var msg = "The CORS policy for this site does not allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
        exposedHeaders: config_1.configCors.exposedHeaders,
        // To enable HTTP cookies over CORS
        // credentials: true,
    }));
};
exports.allowCors = allowCors;
var handleBodyRequestParsing = function (router) {
    // parse incoming Request Object if object, with nested objects, or generally any type.
    router.use(body_parser_1.default.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
    // parse application/json, basically parse incoming Request Object as a JSON Object
    router.use(body_parser_1.default.json({ limit: '10mb' }));
};
exports.handleBodyRequestParsing = handleBodyRequestParsing;
// Logging all request in console.
var reqConsoleLogger = function (router) {
    router.use(requestLogger_1.requestLogger);
};
exports.reqConsoleLogger = reqConsoleLogger;
// Compress the payload and send through api
var handleCompression = function (router) {
    router.use((0, compression_1.default)());
};
exports.handleCompression = handleCompression;
var requestLimiter = function (router) {
    // Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    // see https://expressjs.com/en/guide/behind-proxies.html
    // app.set('trust proxy', 1);s
    var limiter = (0, express_rate_limit_1.default)({
        windowMs: +config_1.rateLimitConfig.inTime,
        max: +config_1.rateLimitConfig.maxRequest,
        message: {
            status: 0,
            error: 'Too Many Requests',
            statusCode: 429,
            message: 'Oh boy! You look in hurry, take it easy',
            description: 'You have crossed maximum number of requests. please wait and try again.',
        },
    });
    router.use(limiter);
};
exports.requestLimiter = requestLimiter;
var middleware = [
    exports.useHelmet,
    exports.handleCompression,
    exports.requestLimiter,
    exports.reqConsoleLogger,
    exports.handleBodyRequestParsing,
    exports.allowCors,
];
exports.default = middleware;
//# sourceMappingURL=common.middleware.js.map