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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudiosController = void 0;
const common_1 = require("@nestjs/common");
const studios_service_1 = require("./studios.service");
const studios_dto_1 = require("./dto/studios.dto");
let StudiosController = class StudiosController {
    constructor(studiosService) {
        this.studiosService = studiosService;
    }
    async get() {
        return this.studiosService.get();
    }
    async findByName(module) {
        return this.studiosService.findByModule(module);
    }
    async create(dto) {
        return this.studiosService.create(dto);
    }
    async update(id, dto) {
        return this.studiosService.update(id, dto);
    }
};
exports.StudiosController = StudiosController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudiosController.prototype, "get", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(':module'),
    __param(0, (0, common_1.Param)('module')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudiosController.prototype, "findByName", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [studios_dto_1.StudiosDto]),
    __metadata("design:returntype", Promise)
], StudiosController.prototype, "create", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, studios_dto_1.StudiosDto]),
    __metadata("design:returntype", Promise)
], StudiosController.prototype, "update", null);
exports.StudiosController = StudiosController = __decorate([
    (0, common_1.Controller)('studios'),
    __metadata("design:paramtypes", [studios_service_1.StudiosService])
], StudiosController);
//# sourceMappingURL=studios.controller.js.map