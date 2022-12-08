"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var util_1 = require("util");
var dbConnection_1 = __importDefault(require("./lib/helpers/dbConnection"));
/* Error Handlers */
// These error handlers will caught any unhandled exceptions or rejections
// and do not stop the process with zero.
process.on('uncaughtException', function (e) {
    console.log(e.message, 'uncaught');
    process.exit(1);
});
process.on('unhandledRejection', function (e) {
    console.log(e, 'unhandled');
    process.exit(1);
});
//Initializing express app
var app = (0, express_1.default)();
// Initializing middleware
var wrapper_1 = require("./lib/utils/wrapper");
var common_middleware_1 = __importDefault(require("./lib/middleware/common.middleware"));
var error_middleware_1 = __importDefault(require("./lib/middleware/error.middleware"));
// import v1 from './routes/v1';
// import v2 from './routes/v2';
(0, wrapper_1.applyMiddleware)(common_middleware_1.default, app);
//Opened mongoose connection
dbConnection_1.default.mongoConnection();
/*---------------------------------------
| API VERSIONS CONFIGURATION [START]
|---------------------------------------*/
// Different router required to initialize different apis call.
// const r1 = express.Router();
// const r2 = express.Router();
// Different router required to initialize different apis call.
// console.log(v1, v2);
// app.use('/', applyRoutes(v1, r1));
// app.use('/', applyRoutes(v2, r2));
/*---------------------------------------
| API VERSIONS CONFIGURATION [END]
|---------------------------------------*/
//Initializing error middleware
(0, wrapper_1.applyMiddleware)(error_middleware_1.default, app);
var PORT = process.env.PORT ? +process.env.PORT : 3000;
app.listen(PORT, function () {
    (0, util_1.log)('Listening on port ' + PORT);
});
//# sourceMappingURL=app.js.map