"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("./configs/configs");
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = __importDefault(require("./configs/database"));
const routes_1 = require("./routes/routes");
configs_1.configs.app.use(body_parser_1.default.urlencoded({ extended: false }));
configs_1.configs.app.use(body_parser_1.default.json());
configs_1.configs.app.listen(configs_1.configs.port, () => {
    console.log(`Express is listening at http://localhost:${configs_1.configs.port}`);
    (0, database_1.default)().then(() => {
        console.log('Database connected!');
    });
    (0, routes_1.setRoutes)(configs_1.configs.app);
});
//# sourceMappingURL=app.js.map