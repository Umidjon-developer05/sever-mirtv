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
exports.ActorsController = void 0;
const common_1 = require("@nestjs/common");
const actors_service_1 = require("./actors.service");
const actors_dto_1 = require("./dto/actors.dto");
let ActorsController = class ActorsController {
    constructor(actorsService) {
        this.actorsService = actorsService;
    }
    async getAll() {
        return this.actorsService.getAll();
    }
    async findByName(name) {
        return this.actorsService.findByName(name);
    }
    async findById(id) {
        return this.actorsService.findById(id);
    }
    async create(dto) {
        return this.actorsService.create(dto);
    }
    async update(id, dto) {
        return this.actorsService.update(id, dto);
    }
    async remove(id) {
        return this.actorsService.remove(id);
    }
};
exports.ActorsController = ActorsController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ActorsController.prototype, "getAll", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActorsController.prototype, "findByName", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActorsController.prototype, "findById", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [actors_dto_1.ActorsDto]),
    __metadata("design:returntype", Promise)
], ActorsController.prototype, "create", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, actors_dto_1.ActorsDto]),
    __metadata("design:returntype", Promise)
], ActorsController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActorsController.prototype, "remove", null);
exports.ActorsController = ActorsController = __decorate([
    (0, common_1.Controller)('actors'),
    __metadata("design:paramtypes", [actors_service_1.ActorsService])
], ActorsController);
//# sourceMappingURL=actors.controller.js.map