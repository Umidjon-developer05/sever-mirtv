"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudiosModule = void 0;
const common_1 = require("@nestjs/common");
const studios_service_1 = require("./studios.service");
const studios_controller_1 = require("./studios.controller");
const movies_schema_1 = require("../movies/movies.schema");
const mongoose_1 = require("@nestjs/mongoose");
const studios_schema_1 = require("./studios.schema");
let StudiosModule = class StudiosModule {
};
exports.StudiosModule = StudiosModule;
exports.StudiosModule = StudiosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: studios_schema_1.Studios.name, schema: studios_schema_1.StudiosSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: movies_schema_1.Movies.name, schema: movies_schema_1.MoviesSchema }]),
        ],
        controllers: [studios_controller_1.StudiosController],
        providers: [studios_service_1.StudiosService],
    })
], StudiosModule);
//# sourceMappingURL=studios.module.js.map