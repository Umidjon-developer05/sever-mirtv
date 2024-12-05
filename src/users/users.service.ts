import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Users, UsersDocument } from './users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersDto } from './dto/users.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  async get(email: string, password: string) {
    const user = await this.usersModel.findOne({ email: email });

    if (user.password != password) {
      throw new HttpException(
        'Password wrong!',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return user;
  }

  async getById(id: string) {
    return this.usersModel.findOne({ _id: id });
  }

  async getByGoogle(email: string, name: string, image: string) {
    const user = await this.usersModel.findOne({ email: email });
    if (user) return user;

    const dto = {
      name: name,
      email: email,
      password: image.substring(36, 44),
      image: image,
      userId: uuidv4(),
      customId: uuidv4(),
    };
    const createdUser = new this.usersModel(dto);
    return createdUser.save();
  }

  async create(dto: UsersDto): Promise<Users> {
    const user = await this.usersModel.findOne({ email: dto.email });

    if (user) {
      throw new HttpException(
        'Email is already taken',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const createdUser = new this.usersModel({
      ...dto,
      userId: uuidv4(),
      customId: uuidv4(), // Generate a unique customId
    });
    return createdUser.save();
  }
}
