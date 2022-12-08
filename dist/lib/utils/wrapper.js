"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyRoutes = exports.applyMiddleware = void 0;
var auth_middleware_1 = require("../middleware/auth.middleware");
// Load all middleware with this function call
var applyMiddleware = function (middlewareWrappers, router) {
    for (var _i = 0, middlewareWrappers_1 = middlewareWrappers; _i < middlewareWrappers_1.length; _i++) {
        var wrapper = middlewareWrappers_1[_i];
        wrapper(router);
    }
};
exports.applyMiddleware = applyMiddleware;
// loading all routes and initialize to use them.
var applyRoutes = function (routes, router) {
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var route = routes_1[_i];
        var method = route.method, path = route.path, escapeAuth = route.escapeAuth, handler = route.handler, adminOnly = route.adminOnly, role = route.role;
        if (escapeAuth) {
            router[method](path, handler);
        }
        else if (role) {
            router[method](path, __spreadArray([auth_middleware_1.Authorization, (0, auth_middleware_1.RoleAuthorization)(role)], handler, true));
        }
        else if (adminOnly) {
            router[method](path, __spreadArray([auth_middleware_1.Authorization, auth_middleware_1.AdminAuthorization], handler, true));
        }
        else {
            router[method](path, __spreadArray([auth_middleware_1.Authorization], handler, true));
        }
    }
    return router;
};
exports.applyRoutes = applyRoutes;
//# sourceMappingURL=wrapper.js.map