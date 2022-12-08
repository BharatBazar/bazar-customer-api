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
var mongoose_1 = require("mongoose");
var chalk = __importStar(require("chalk"));
var config_1 = require("../../config");
//require database URL from properties file
var connected = chalk.default.bold.cyan;
var error = chalk.default.bold.yellow;
var disconnected = chalk.default.bold.red;
var termination = chalk.default.bold.magenta;
var Connection = /** @class */ (function () {
    function Connection(uri) {
        this.mongoUrl = uri;
    }
    Connection.prototype.mongoConnection = function () {
        var dbURL = this.mongoUrl;
        (0, mongoose_1.connect)(dbURL, this.mongoOption());
        mongoose_1.connection.on('connected', function () {
            console.log(connected('Mongoose default connection is open to ', dbURL, "\uD83D\uDE0D"));
        });
        mongoose_1.connection.on('error', function (err) {
            console.log(error('Mongoose default connection has occured ' + err + ' error'));
        });
        mongoose_1.connection.on('disconnected', function () {
            console.log(disconnected('Mongoose default connection is disconnected'));
        });
        //Generated from the terminal is supported on all platforms, and can usually be generated with Ctrl+C (though this may be configurable).
        // It is not generated when terminal raw mode is enabled and Ctrl+C is used.
        process.on('SIGINT', function () {
            mongoose_1.connection.close(function () {
                console.log(termination('Mongoose default connection is disconnected due to application termination'));
                process.exit(0);
            });
        });
    };
    Connection.prototype.mongoOption = function () {
        return {
            // absolutely copied from mongoose docs.
            // Change according to your need
            // useNewUrlParser: true,
            //  useCreateIndex: true,
            // useFindAndModify: false,
            // useUnifiedTopology: true,
            //autoIndex: false, // Don't build indexes
            // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
            // reconnectInterval: 500, // Reconnect every 500ms
            // poolSize: 10, // Maintain up to 10 socket connections
            // If not connected, return errors immediately rather than waiting for reconnect
            //   bufferMaxEntries: 0,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            family: 4, // Use IPv4, skip trying IPv6
        };
    };
    return Connection;
}());
exports.default = new Connection((0, config_1.mongoUrl)());
//# sourceMappingURL=dbConnection.js.map