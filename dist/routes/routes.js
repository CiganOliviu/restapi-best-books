"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoutes = void 0;
const author_controller_1 = require("../controllers/author.controller");
const authors_controller_1 = require("../controllers/authors.controller");
const book_controller_1 = require("../controllers/book.controller");
const books_controller_1 = require("../controllers/books.controller");
const categories_controller_1 = require("../controllers/categories.controller");
const category_controller_1 = require("../controllers/category.controller");
function setRoutes(app) {
    app.use('/categories/:id', category_controller_1.getCategoryController);
    app.use('/categories', categories_controller_1.operateOverCategoriesController);
    app.use('/authors/:id', author_controller_1.getAuthorController);
    app.use('/authors', authors_controller_1.operateOverAuthorsController);
    app.use('/books/:id', book_controller_1.getBookController);
    app.use('/books', books_controller_1.operateOverBooksController);
}
exports.setRoutes = setRoutes;
//# sourceMappingURL=routes.js.map