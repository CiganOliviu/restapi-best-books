"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoutes = void 0;
const authors_controller_1 = require("../controllers/authors.controller");
function setRoutes(app) {
    app.use('/authors', authors_controller_1.operateOverAuthorsController);
}
exports.setRoutes = setRoutes;
//# sourceMappingURL=routes.js.map