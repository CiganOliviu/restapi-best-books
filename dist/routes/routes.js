"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../configs/configs");
const app_layout_controller_1 = require("../controllers/app_layout.controller");
const app_layout_element_controller_1 = require("../controllers/app_layout_element.controller");
const author_controller_1 = require("../controllers/author.controller");
const authors_controller_1 = require("../controllers/authors.controller");
const book_controller_1 = require("../controllers/book.controller");
const books_controller_1 = require("../controllers/books.controller");
const categories_controller_1 = require("../controllers/categories.controller");
const category_controller_1 = require("../controllers/category.controller");
const nationalities_controller_1 = require("../controllers/nationalities.controller");
const nationality_controller_1 = require("../controllers/nationality.controller");
const schemas_controller_1 = require("../controllers/schemas.controller");
const style_component_controller_1 = require("../controllers/style_component.controller");
const style_components_controller_1 = require("../controllers/style_components.controller");
function setRoutes(app, cors) {
    app.use(cors(configs_1.configs.corsOptions));
    app.use('/categories/:id', category_controller_1.getCategoryController);
    app.use('/categories', categories_controller_1.operateOverCategoriesController);
    app.use('/authors/:id', author_controller_1.getAuthorController);
    app.use('/authors', authors_controller_1.operateOverAuthorsController);
    app.use('/books/:id', book_controller_1.getBookController);
    app.use('/books', books_controller_1.operateOverBooksController);
    app.use('/nationalities/:id', nationality_controller_1.getNationalityController);
    app.use('/nationalities', nationalities_controller_1.operateOverNationalitiesController);
    app.use('/schemas', schemas_controller_1.operateOverSchemasController);
    app.use('/style-components', style_components_controller_1.operateOverStyledComponentsController);
    app.use('/style-component/:id', style_component_controller_1.getStyleComponentController);
    app.use('/app-layout', app_layout_controller_1.operateOverAppLayoutController);
    app.use('/app-layout/:id', app_layout_element_controller_1.getAppLayoutElementController);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map