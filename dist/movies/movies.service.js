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
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const movies_schema_1 = require("./movies.schema");
let MoviesService = class MoviesService {
    constructor(moviesModel) {
        this.moviesModel = moviesModel;
    }
    async findByType(type) {
        if (type == 'all')
            return this.moviesModel.find().populate('studio').sort({ timeline: -1 });
        return this.moviesModel
            .find({ type: type })
            .populate('studio')
            .sort({ timeline: -1 });
    }
    async findRandom() {
        return this.moviesModel.aggregate([
            {
                $sample: { size: 10 },
            },
            {
                $lookup: {
                    from: 'studios',
                    localField: 'studio',
                    foreignField: '_id',
                    as: 'studio',
                },
            },
        ]);
    }
    async findByName(name) {
        return this.moviesModel
            .findOne({ name })
            .populate('studio')
            .populate('cast')
            .populate('directors')
            .populate('producers')
            .populate('screenwriters');
    }
    async create(dto) {
        dto.studio = new mongoose_2.default.Types.ObjectId(dto.studio);
        dto.cast = dto.cast.map((id) => new mongoose_2.default.Types.ObjectId(id));
        dto.directors = dto.directors.map((id) => new mongoose_2.default.Types.ObjectId(id));
        dto.producers = dto.producers.map((id) => new mongoose_2.default.Types.ObjectId(id));
        dto.screenwriters = dto.screenwriters.map((id) => new mongoose_2.default.Types.ObjectId(id));
        dto.release = new Date(dto.release).toISOString();
        dto.timeline = new Date(dto.timeline).toISOString();
        await this.moviesModel.create(dto);
        return 'success';
    }
    async update(id, dto) {
        await this.moviesModel.findByIdAndUpdate(id, dto, { new: true });
        return 'success';
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(movies_schema_1.Movies.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MoviesService);
//# sourceMappingURL=movies.service.js.map