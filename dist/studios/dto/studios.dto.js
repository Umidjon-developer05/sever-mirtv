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
exports.StudiosDto = void 0;
const class_validator_1 = require("class-validator");
const lang_dto_1 = require("../../movies/dto/lang.dto");
class StudiosDto {
}
exports.StudiosDto = StudiosDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", lang_dto_1.LangDto)
], StudiosDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StudiosDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StudiosDto.prototype, "module", void 0);
//# sourceMappingURL=studios.dto.js.map