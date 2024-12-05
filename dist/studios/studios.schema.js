"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudiosSchema = exports.Studios = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const lang_dto_1 = require("../movies/dto/lang.dto");
let Studios = class Studios {
};
exports.Studios = Studios;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", lang_dto_1.LangDto)
], Studios.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Studios.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Studios.prototype, "module", void 0);
exports.Studios = Studios = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Studios);
exports.StudiosSchema = mongoose_1.SchemaFactory.createForClass(Studios);
//# sourceMappingURL=studios.schema.js.map