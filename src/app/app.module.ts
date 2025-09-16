import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from 'src/movies/movies.module';
import { ActorsModule } from 'src/actors/actors.module';
import { UsersModule } from 'src/users/users.module';
import { StudiosModule } from 'src/studios/studios.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://Shoxruxasadov:Sh4157833@moviego.5164gwd.mongodb.net/?retryWrites=true&w=majority&appName=MovieGo`,
      { dbName: 'moviego' },
    ),
    UsersModule,
    MoviesModule,
    StudiosModule,
    ActorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
