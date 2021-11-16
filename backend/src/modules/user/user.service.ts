import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterDto } from './dto/registes.dto';
import { UserEntity } from './user.entity';
import { genSalt, hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { JwtPayload } from './auth/jwt-payload.model';
import { UserLoginResponseDto } from './dto/user-login-response.dto';
import { UserLoginRequestDto } from './dto/user-login-request.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private readonly jwtPrivateKey: string;
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof UserEntity,
  ) {
    this.jwtPrivateKey = process.env.JWT_SECRET;
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.findAll<UserEntity>();
  }

  async register(registerDto: RegisterDto) {
    try {
      const user = new UserEntity();
      user.name = registerDto.name;
      user.email = registerDto.email;
      const salt = await genSalt(10);
      user.password = await hash(registerDto.password, salt);

      const userData = await user.save();

      // when registering then log user in automatically by returning a token
      const token = await this.signToken(userData);
      return new UserLoginResponseDto(userData, token);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(userLoginRequestDto: UserLoginRequestDto) {
    const email = userLoginRequestDto.email;
    const password = userLoginRequestDto.password;

    const user = await this.getUserByEmail(email);
    if (!user) {
      throw new HttpException(
        'Invalid email or password.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      throw new HttpException(
        'Invalid email or password.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const token = await this.signToken(user);
    return new UserLoginResponseDto(user, token);
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne<UserEntity>({
      where: { email },
    });
  }

  async getUser(id: string) {
    const user = await this.userRepository.findByPk<UserEntity>(id);
    if (!user) {
      throw new HttpException(
        'User with given id not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return new UserDto(user);
  }

  async signToken(user: UserEntity) {
    const payload: JwtPayload = {
      email: user.email,
    };

    return sign(payload, this.jwtPrivateKey, {});
  }
}
