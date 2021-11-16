import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { RegisterDto } from './dto/registes.dto';
import { UserLoginRequestDto } from './dto/user-login-request.dto';
import { UserLoginResponseDto } from './dto/user-login-response.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  @HttpCode(200)
  @ApiOkResponse({ type: UserLoginResponseDto })
  register(@Body() registerDto: RegisterDto): Promise<UserLoginResponseDto> {
    return this.userService.register(registerDto);
  }

  @Post('login')
  @HttpCode(200)
  @ApiOkResponse({ type: UserLoginResponseDto })
  login(
    @Body() userLoginRequestDto: UserLoginRequestDto,
  ): Promise<UserLoginResponseDto> {
    return this.userService.login(userLoginRequestDto);
  }

  @Get('me')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse({ type: UserDto })
  async getUser(@Req() request): Promise<UserDto> {
    return this.userService.getUser(request.user.id);
  }
}
