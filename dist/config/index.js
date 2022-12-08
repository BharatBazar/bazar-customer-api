"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Config = exports.SALT_ROUNDS = exports.commonConfig = exports.paginationConfig = exports.mongoUrl = exports.rateLimitConfig = exports.configCors = void 0;
exports.configCors = {
    // Allow your domains to restrict ill apis.
    allowOrigin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:8081', 'http://localhost:8080'],
    // Expose additional which are restricted.
    exposedHeaders: ['X-Auth'],
};
exports.rateLimitConfig = {
    inTime: process.env.REQUEST_TIME || 60 * 1000,
    maxRequest: process.env.MAX_REQUEST || 60,
};
var mongoUrl = function () {
    var configs = {
        dbAccess: process.env.DB_ACCESS || 'local',
        user: process.env.DB_USER || '',
        pass: process.env.DB_PASS || '',
        cluster: process.env.DB_CLUSTER || '',
        db: process.env.DB || 'bazar-api',
    };
    if (configs.dbAccess === 'local') {
        return "mongodb+srv://".concat(configs.user, ":").concat(configs.pass, "@").concat(configs.cluster, ".mongodb.net/?retryWrites=true&w=majority");
    }
    var url = "mongodb+srv://".concat(configs.user, ":").concat(configs.pass, "@").concat(configs.cluster, ".mongodb.net/").concat(configs.db, "?retryWrites=true");
    console.log('url', url);
    return url;
};
exports.mongoUrl = mongoUrl;
var paginationConfig;
(function (paginationConfig) {
    paginationConfig[paginationConfig["MAX_SHOP"] = 10] = "MAX_SHOP";
    paginationConfig[paginationConfig["MAX_PRODUCT"] = 10] = "MAX_PRODUCT";
})(paginationConfig = exports.paginationConfig || (exports.paginationConfig = {}));
exports.commonConfig = {
    jwtSecretKey: process.env.SECRET_KEY || 'some-secret-key',
    pageSizeLimit: 15,
};
exports.SALT_ROUNDS = 10;
exports.s3Config = {
    accessKey: process.env.S3_ACCEESS_ID || '',
    secretKey: process.env.S3_SECRET_KEY || '',
    bucketName: 'lababeen-admin-multimedia-bucket',
    region: process.env.S3_REGION || 'ap-south-1',
};
//# sourceMappingURL=index.js.map