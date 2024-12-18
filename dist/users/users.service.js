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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_schema_1 = require("./users.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const uuid_1 = require("uuid");
let UsersService = class UsersService {
    constructor(usersModel) {
        this.usersModel = usersModel;
    }
    async get(email, password) {
        const user = await this.usersModel.findOne({ email: email });
        if (user.password != password) {
            throw new common_1.HttpException('Password wrong!', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return user;
    }
    async getById(id) {
        return this.usersModel.findOne({ _id: id });
    }
    async getByGoogle(email, name, image) {
        const user = await this.usersModel.findOne({ email: email });
        if (user)
            return user;
        const dto = {
            name: name,
            email: email,
            password: image.substring(36, 44),
            image: image,
            userId: (0, uuid_1.v4)(),
            customId: (0, uuid_1.v4)(),
        };
        const createdUser = new this.usersModel(dto);
        return createdUser.save();
    }
    async create(dto) {
        const user = await this.usersModel.findOne({ email: dto.email });
        if (user) {
            throw new common_1.HttpException('Email is already taken', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const createdUser = new this.usersModel({
            ...dto,
            userId: (0, uuid_1.v4)(),
            customId: (0, uuid_1.v4)(),
        });
        return createdUser.save();
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map