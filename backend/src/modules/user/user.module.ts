import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.providers';
import { JwtStrategy } from './auth/jwt-strategy';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders, JwtStrategy],
})
export class UserModule {}
