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
exports.MoviesSchema = exports.Movies = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lang_dto_1 = require("./dto/lang.dto");
const image_dto_1 = require("./dto/image.dto");
const movie_dto_1 = require("./dto/movie.dto");
const studios_schema_1 = require("../studios/studios.schema");
let Movies = class Movies {
};
exports.Movies = Movies;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Movies.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", lang_dto_1.LangDto)
], Movies.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", lang_dto_1.LangDto)
], Movies.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", image_dto_1.ImageDto)
], Movies.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", movie_dto_1.MovieDto)
], Movies.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Array)
], Movies.prototype, "episodes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Array)
], Movies.prototype, "seasons", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Movies.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Movies.prototype, "module", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Movies.prototype, "format", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Movies.prototype, "resolution", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Movies.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Object)
], Movies.prototype, "release", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Object)
], Movies.prototype, "timeline", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Movies.prototype, "grossing", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Movies.prototype, "budget", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        required: true,
        ref: 'Studios',
    }),
    __metadata("design:type", studios_schema_1.Studios)
], Movies.prototype, "studio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Movies.prototype, "made", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Movies.prototype, "mpa", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Movies.prototype, "genre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Movies.prototype, "languages", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Movies.prototype, "ratings", void 0);
__decorate([
    (0, mongoose_1.Prop)([
        {
            type: mongoose_2.Schema.Types.ObjectId,
            required: true,
            ref: 'Actors',
        },
    ]),
    __metadata("design:type", Array)
], Movies.prototype, "cast", void 0);
__decorate([
    (0, mongoose_1.Prop)([
        {
            type: mongoose_2.Schema.Types.ObjectId,
            required: true,
            ref: 'Actors',
        },
    ]),
    __metadata("design:type", Array)
], Movies.prototype, "directors", void 0);
__decorate([
    (0, mongoose_1.Prop)([
        {
            type: mongoose_2.Schema.Types.ObjectId,
            required: true,
            ref: 'Actors',
        },
    ]),
    __metadata("design:type", Array)
], Movies.prototype, "producers", void 0);
__decorate([
    (0, mongoose_1.Prop)([
        {
            type: mongoose_2.Schema.Types.ObjectId,
            required: true,
            ref: 'Actors',
        },
    ]),
    __metadata("design:type", Array)
], Movies.prototype, "screenwriters", void 0);
exports.Movies = Movies = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Movies);
exports.MoviesSchema = mongoose_1.SchemaFactory.createForClass(Movies);
//# sourceMappingURL=movies.schema.js.map