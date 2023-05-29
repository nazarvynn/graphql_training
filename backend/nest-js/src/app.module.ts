import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<'postgres'>('TYPEORM_CONNECTION'),
        host: config.get<string>('TYPEORM_HOST'),
        port: config.get<number>('TYPEORM_PORT'),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        database: config.get<string>('TYPEORM_DATABASE'),
        entities: [__dirname, 'dist/**/*.entity{.ts,.js}'],
        synchronize: true, // Better use migrations
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.graphql',
      sortSchema: true,
      driver: ApolloDriver,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
