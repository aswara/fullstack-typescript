import { UserEntity } from './../user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly picture: string;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.picture = user.picture;
  }
}
