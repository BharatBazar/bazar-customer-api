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
exports.deleteImage = exports.convertToArray = exports.getSignUrl = exports.s3BucketKeys = exports.s3UploadMulter = exports.s3 = void 0;
var aws_sdk_1 = require("aws-sdk");
var multer_1 = __importDefault(require("multer"));
var multer_s3_1 = __importDefault(require("multer-s3"));
var httpErrors_1 = require("../utils/httpErrors");
var config_1 = require("../../config");
exports.s3 = new aws_sdk_1.S3({
    accessKeyId: config_1.s3Config.accessKey,
    secretAccessKey: config_1.s3Config.secretKey,
    region: config_1.s3Config.region,
    signatureVersion: 'v4',
});
exports.s3UploadMulter = (0, multer_1.default)({
    storage: (0, multer_s3_1.default)({
        s3: exports.s3,
        bucket: config_1.s3Config.bucketName,
        acl: 'public-read',
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            console.log(file);
            cb(null, Date.now().toString() + '-' + file.originalname);
        },
    }),
});
var s3BucketKeys;
(function (s3BucketKeys) {
    s3BucketKeys["productImage"] = "product-image";
})(s3BucketKeys = exports.s3BucketKeys || (exports.s3BucketKeys = {}));
var getSignedUrl = function (Key, ContentType) {
    return new Promise(function (resolve, reject) {
        exports.s3.getSignedUrl('putObject', {
            Bucket: config_1.s3Config.bucketName,
            //  ContentType: 'image/png',
            Key: Key,
        }, function (err, url) {
            console.log('error =>', err, url);
            if (err) {
                reject(err);
            }
            console.log(url);
            resolve(url);
        });
    });
};
// Get sign url::
var getSignUrl = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var key, e_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                key = data.key;
                _a = { Key: '' };
                return [4 /*yield*/, getSignedUrl(key, '')];
            case 1: return [2 /*return*/, (_a.url = _b.sent(), _a)];
            case 2:
                e_1 = _b.sent();
                console.log('error =>', e_1);
                throw new httpErrors_1.HTTP400Error('This url has already been used', 'Please create new url then try');
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getSignUrl = getSignUrl;
var convertToArray = function (key) {
    var data = [];
    if (typeof key == 'string') {
        data.push({ Key: key });
        return data;
    }
    return key.map(function (item) {
        return { Key: item };
    });
};
exports.convertToArray = convertToArray;
var deleteImage = function (key) { return __awaiter(void 0, void 0, void 0, function () {
    var s3_1, deleteArray, deleted, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                s3_1 = new aws_sdk_1.S3({
                    accessKeyId: config_1.s3Config.accessKey,
                    secretAccessKey: config_1.s3Config.secretKey,
                    region: config_1.s3Config.region,
                    signatureVersion: 'v4',
                });
                deleteArray = (0, exports.convertToArray)(key);
                return [4 /*yield*/, s3_1.deleteObjects({
                        Delete: {
                            Objects: deleteArray,
                        },
                        Bucket: config_1.s3Config.bucketName,
                    }, function (err, data) {
                        if (err) {
                            throw new httpErrors_1.HTTP400Error(err.message);
                        }
                        else {
                            return true;
                        }
                    })];
            case 1:
                deleted = _a.sent();
                if (deleted) {
                    return [2 /*return*/, 'Image deleted'];
                }
                else {
                    throw new httpErrors_1.HTTP400Error('Problem deleting image');
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                throw new httpErrors_1.HTTP400Error(error_1.message);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteImage = deleteImage;
//# sourceMappingURL=s3.js.map