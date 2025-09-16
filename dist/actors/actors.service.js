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
exports.ActorsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const actors_schema_1 = require("./actors.schema");
let ActorsService = class ActorsService {
    constructor(actorsModel) {
        this.actorsModel = actorsModel;
    }
    async getAll() {
        return this.actorsModel.find();
    }
    async findByName(name) {
        return this.actorsModel.findOne({ name });
    }
    async findById(id) {
        return this.actorsModel.findOne({ _id: id });
    }
    async create(dto) {
        this.actorsModel.create(dto);
        return 'success';
    }
    async update(id, dto) {
        await this.actorsModel.findByIdAndUpdate(id, dto, { new: true });
        return 'success';
    }
    async remove(id) {
        await this.actorsModel.findByIdAndDelete(id);
        return 'success';
    }
};
exports.ActorsService = ActorsService;
exports.ActorsService = ActorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(actors_schema_1.Actors.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ActorsService);
//# sourceMappingURL=actors.service.js.map