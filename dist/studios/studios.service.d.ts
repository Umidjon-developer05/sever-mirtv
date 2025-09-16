/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import mongoose, { Model } from 'mongoose';
import { Studios, StudiosDocument } from './studios.schema';
import { StudiosDto } from './dto/studios.dto';
import { Movies, MoviesDocument } from 'src/movies/movies.schema';
export declare class StudiosService {
    private studiosModel;
    private moviesModel;
    constructor(studiosModel: Model<StudiosDocument>, moviesModel: Model<MoviesDocument>);
    get(): Promise<(mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Studios> & Studios & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Studios> & Studios & {
        _id: mongoose.Types.ObjectId;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>)[]>;
    findByModule(module: string): Promise<(mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Movies> & Movies & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Movies> & Movies & {
        _id: mongoose.Types.ObjectId;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>)[]>;
    create(dto: StudiosDto): Promise<string>;
    update(id: string, dto: StudiosDto): Promise<string>;
}
