"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var customers_routes_1 = __importDefault(require("@modules/customers/infra/http/routes/customers.routes"));
var products_routes_1 = __importDefault(require("@modules/products/infra/http/routes/products.routes"));
var orders_routes_1 = __importDefault(require("@modules/orders/infra/http/routes/orders.routes"));
var routes = express_1.Router();
routes.use('/customers', customers_routes_1.default);
routes.use('/products', products_routes_1.default);
routes.use('/orders', orders_routes_1.default);
exports.default = routes;
