"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoutes = void 0;
const authors_controller_1 = require("../controllers/authors.controller");
const books_controller_1 = require("../controllers/books.controller");
const categories_controller_1 = require("../controllers/categories.controller");
function setRoutes(app) {
    app.use('/categories', categories_controller_1.operateOverCategoriesController);
    app.use('/authors', authors_controller_1.operateOverAuthorsController);
    app.use('/books', books_controller_1.operateOverBooksController);
}
exports.setRoutes = setRoutes;
//# sourceMappingURL=routes.js.map