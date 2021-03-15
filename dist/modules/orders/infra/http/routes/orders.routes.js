"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var OrdersController_1 = __importDefault(require("../controller/OrdersController"));
var ordersRouter = express_1.Router();
var ordersController = new OrdersController_1.default();
ordersRouter.post('/', ordersController.create);
ordersRouter.get('/:id', ordersController.show);
exports.default = ordersRouter;
