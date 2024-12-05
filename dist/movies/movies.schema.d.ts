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
import { Date, HydratedDocument } from 'mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { LangDto } from './dto/lang.dto';
import { ImageDto } from './dto/image.dto';
import { MovieDto } from './dto/movie.dto';
import { SerieDto } from './dto/serie.dto.';
import { Actors } from 'src/actors/actors.schema';
import { Studios } from 'src/studios/studios.schema';
export type MoviesDocument = HydratedDocument<Movies>;
export declare class Movies {
    name: string;
    title: LangDto;
    description: LangDto;
    image: ImageDto;
    source: MovieDto | null;
    episodes: SerieDto[] | null;
    seasons: string[] | null;
    type: string;
    module: string;
    format: string;
    resolution: string;
    duration: number;
    release: Date;
    timeline: Date;
    grossing: string | null;
    budget: string | null;
    studio: Studios;
    made: string;
    mpa: number;
    genre: string[];
    languages: string[];
    ratings: string[];
    cast: Actors[];
    directors: Actors[];
    producers: Actors[];
    screenwriters: Actors[];
}
export declare const MoviesSchema: MongooseSchema<Movies, import("mongoose").Model<Movies, any, any, any, Document<unknown, any, Movies> & Movies & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Movies, Document<unknown, {}, import("mongoose").FlatRecord<Movies>> & import("mongoose").FlatRecord<Movies> & {
    _id: Types.ObjectId;
}>;
