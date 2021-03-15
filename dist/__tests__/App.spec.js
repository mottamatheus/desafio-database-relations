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
        while (_) try {
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
var supertest_1 = __importDefault(require("supertest"));
var typeorm_1 = require("typeorm");
var index_1 = __importDefault(require("@shared/infra/typeorm/index"));
var Product_1 = __importDefault(require("@modules/products/infra/typeorm/entities/Product"));
var app_1 = __importDefault(require("@shared/infra/http/app"));
var connection;
describe('App', function () {
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_1.default('test-connection')];
                case 1:
                    connection = _a.sent();
                    return [4 /*yield*/, connection.query('DROP TABLE IF EXISTS orders_products')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, connection.query('DROP TABLE IF EXISTS orders')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, connection.query('DROP TABLE IF EXISTS products')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, connection.query('DROP TABLE IF EXISTS customers')];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, connection.query('DROP TABLE IF EXISTS migrations')];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, connection.runMigrations()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query('DELETE FROM orders_products')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, connection.query('DELETE FROM orders')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, connection.query('DELETE FROM products')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, connection.query('DELETE FROM customers')];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var mainConnection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mainConnection = typeorm_1.getConnection();
                    return [4 /*yield*/, connection.close()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, mainConnection.close()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to create a new customer', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/customers').send({
                        name: 'Rocketseat',
                        email: 'oi@rocketseat.com.br',
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.body).toEqual(expect.objectContaining({
                        name: 'Rocketseat',
                        email: 'oi@rocketseat.com.br',
                    }));
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not be able to create a customer with one e-mail thats already registered', function () { return __awaiter(void 0, void 0, void 0, function () {
        var customer, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/customers').send({
                        name: 'Rocketseat',
                        email: 'oi@rocketseat.com.br',
                    })];
                case 1:
                    customer = _a.sent();
                    expect(customer.body).toEqual(expect.objectContaining({
                        name: 'Rocketseat',
                        email: 'oi@rocketseat.com.br',
                    }));
                    return [4 /*yield*/, supertest_1.default(app_1.default).post('/customers').send({
                            name: 'Rocketseat',
                            email: 'oi@rocketseat.com.br',
                        })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to create a new product', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/products').send({
                        name: 'Produto 01',
                        price: 500,
                        quantity: 50,
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.body).toEqual(expect.objectContaining({
                        name: 'Produto 01',
                        price: 500,
                        quantity: 50,
                    }));
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not be able to create a duplicated product', function () { return __awaiter(void 0, void 0, void 0, function () {
        var product, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/products').send({
                        name: 'Produto 01',
                        price: 500,
                        quantity: 50,
                    })];
                case 1:
                    product = _a.sent();
                    expect(product.body).toEqual(expect.objectContaining({
                        name: 'Produto 01',
                        price: 500,
                        quantity: 50,
                    }));
                    return [4 /*yield*/, supertest_1.default(app_1.default).post('/products').send({
                            name: 'Produto 01',
                            price: 500,
                            quantity: 50,
                        })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to create a new order', function () { return __awaiter(void 0, void 0, void 0, function () {
        var product, customer, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/products').send({
                        name: 'Produto 01',
                        price: 500,
                        quantity: 50,
                    })];
                case 1:
                    product = _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.default).post('/customers').send({
                            name: 'Rocketseat',
                            email: 'oi@rocketseat.com.br',
                        })];
                case 2:
                    customer = _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.default)
                            .post('/orders')
                            .send({
                            customer_id: customer.body.id,
                            products: [
                                {
                                    id: product.body.id,
                                    quantity: 5,
                                },
                            ],
                        })];
                case 3:
                    response = _a.sent();
                    expect(response.body).toEqual(expect.objectContaining({
                        customer: expect.objectContaining({
                            id: customer.body.id,
                            name: 'Rocketseat',
                            email: 'oi@rocketseat.com.br',
                        }),
                        order_products: expect.arrayContaining([
                            expect.objectContaining({
                                product_id: product.body.id,
                                price: '500.00',
                                quantity: 5,
                            }),
                        ]),
                    }));
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not be able to create an order with a invalid customer', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/orders').send({
                        customer_id: '6a1922c8-af6e-470e-9a34-621cb0643911',
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.status).toEqual(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not be able to create an order with invalid products', function () { return __awaiter(void 0, void 0, void 0, function () {
        var customer, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/customers').send({
                        name: 'Rocketseat',
                        email: 'oi@rocketseat.com.br',
                    })];
                case 1:
                    customer = _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.default)
                            .post('/orders')
                            .send({
                            customer_id: customer.body.id,
                            products: [
                                {
                                    id: '6a1922c8-af6e-470e-9a34-621cb0643911',
                                },
                            ],
                        })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toEqual(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not be able to create an order with products with insufficient quantities', function () { return __awaiter(void 0, void 0, void 0, function () {
        var customer, product, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/customers').send({
                        name: 'Rocketseat',
                        email: 'oi@rocketseat.com.br',
                    })];
                case 1:
                    customer = _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.default).post('/products').send({
                            name: 'Produto 01',
                            price: 500,
                            quantity: 50,
                        })];
                case 2:
                    product = _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.default)
                            .post('/orders')
                            .send({
                            customer_id: customer.body.id,
                            products: [
                                {
                                    id: product.body.id,
                                    quantity: 500,
                                },
                            ],
                        })];
                case 3:
                    response = _a.sent();
                    expect(response.status).toEqual(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to subtract an product total quantity when it is ordered', function () { return __awaiter(void 0, void 0, void 0, function () {
        var productsRepository, customer, product, foundProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    productsRepository = typeorm_1.getRepository(Product_1.default);
                    return [4 /*yield*/, supertest_1.default(app_1.default).post('/customers').send({
                            name: 'Rocketseat',
                            email: 'oi@rocketseat.com.br',
                        })];
                case 1:
                    customer = _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.default).post('/products').send({
                            name: 'Produto 01',
                            price: 500,
                            quantity: 50,
                        })];
                case 2:
                    product = _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.default)
                            .post('/orders')
                            .send({
                            customer_id: customer.body.id,
                            products: [
                                {
                                    id: product.body.id,
                                    quantity: 5,
                                },
                            ],
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, productsRepository.findOne(product.body.id)];
                case 4:
                    foundProduct = _a.sent();
                    expect(foundProduct).toEqual(expect.objectContaining({
                        quantity: 45,
                    }));
                    return [4 /*yield*/, supertest_1.default(app_1.default)
                            .post('/orders')
                            .send({
                            customer_id: customer.body.id,
                            products: [
                                {
                                    id: product.body.id,
                                    quantity: 5,
                                },
                            ],
                        })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, productsRepository.findOne(product.body.id)];
                case 6:
                    foundProduct = _a.sent();
                    expect(foundProduct).toEqual(expect.objectContaining({
                        quantity: 40,
                    }));
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to list one specific order', function () { return __awaiter(void 0, void 0, void 0, function () {
        var customer, product, order, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/customers').send({
                        name: 'Rocketseat',
                        email: 'oi@rocketseat.com.br',
                    })];
                case 1:
                    customer = _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.default).post('/products').send({
                            name: 'Produto 01',
                            price: 500,
                            quantity: 50,
                        })];
                case 2:
                    product = _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.default)
                            .post('/orders')
                            .send({
                            customer_id: customer.body.id,
                            products: [
                                {
                                    id: product.body.id,
                                    quantity: 5,
                                },
                            ],
                        })];
                case 3:
                    order = _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.default).get("/orders/" + order.body.id)];
                case 4:
                    response = _a.sent();
                    expect(response.body).toEqual(expect.objectContaining({
                        customer: expect.objectContaining({
                            id: customer.body.id,
                            name: 'Rocketseat',
                            email: 'oi@rocketseat.com.br',
                        }),
                        order_products: expect.arrayContaining([
                            expect.objectContaining({
                                product_id: product.body.id,
                                price: '500.00',
                                quantity: 5,
                            }),
                        ]),
                    }));
                    return [2 /*return*/];
            }
        });
    }); });
});
