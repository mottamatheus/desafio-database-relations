"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var CustomersRepository_1 = __importDefault(require("@modules/customers/infra/typeorm/repositories/CustomersRepository"));
var ProductsRepository_1 = __importDefault(require("@modules/products/infra/typeorm/repositories/ProductsRepository"));
var OrdersRepository_1 = __importDefault(require("@modules/orders/infra/typeorm/repositories/OrdersRepository"));
tsyringe_1.container.registerSingleton('CustomersRepository', CustomersRepository_1.default);
tsyringe_1.container.registerSingleton('ProductsRepository', ProductsRepository_1.default);
tsyringe_1.container.registerSingleton('OrdersRepository', OrdersRepository_1.default);
