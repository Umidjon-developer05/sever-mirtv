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
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const movies_service_1 = require("./movies.service");
const movies_dto_1 = require("./dto/movies.dto");
let MoviesController = class MoviesController {
    constructor(moviesService) {
        this.moviesService = moviesService;
    }
    async findByType(type) {
        return this.moviesService.findByType(type);
    }
    async findRandom() {
        return this.moviesService.findRandom();
    }
    async findByName(name) {
        return this.moviesService.findByName(name);
    }
    async create(dto) {
        return this.moviesService.create(dto);
    }
    async update(id, dto) {
        return this.moviesService.update(id, dto);
    }
};
exports.MoviesController = MoviesController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Headers)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "findByType", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('random'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "findRandom", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "findByName", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movies_dto_1.MoviesDto]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "create", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, movies_dto_1.MoviesDto]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "update", null);
exports.MoviesController = MoviesController = __decorate([
    (0, common_1.Controller)('movies'),
    __metadata("design:paramtypes", [movies_service_1.MoviesService])
], MoviesController);
//# sourceMappingURL=movies.controller.js.map