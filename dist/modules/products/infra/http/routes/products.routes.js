"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProductsController_1 = __importDefault(require("../controller/ProductsController"));
var productsRouter = express_1.Router();
var productsController = new ProductsController_1.default();
productsRouter.post('/', productsController.create);
exports.default = productsRouter;
