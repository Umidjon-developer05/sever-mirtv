"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorsModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const actors_schema_1 = require("./actors.schema");
const actors_controller_1 = require("./actors.controller");
const actors_service_1 = require("./actors.service");
let ActorsModule = class ActorsModule {
};
exports.ActorsModule = ActorsModule;
exports.ActorsModule = ActorsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: actors_schema_1.Actors.name, schema: actors_schema_1.ActorsSchema }]),
        ],
        controllers: [actors_controller_1.ActorsController],
        providers: [actors_service_1.ActorsService],
    })
], ActorsModule);
//# sourceMappingURL=actors.module.js.map