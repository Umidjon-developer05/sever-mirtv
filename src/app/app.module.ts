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
      `mongodb+srv://umidjon:Umidjon2005@cluster0.ne91t.mongodb.net/test`,
    ),
    // MailerModule.forRoot({
    //   transport: {
    //     host: 'smtp.sendgrid.net',
    //     auth: {
    //       user: 'apikey',
    //       pass: process.env.SENDGRID_API_KEY,
    //     },
    //   },
    //   // template: {
    //   //   dir: join(__dirname, 'mails'),
    //   //   adapter: new HandlebarsAdapter(),
    //   // },
    // }),
    UsersModule,
    MoviesModule,
    StudiosModule,
    ActorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
