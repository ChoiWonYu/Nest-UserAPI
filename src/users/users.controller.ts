import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/UserLoginDto.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    await this.usersService.createUser(name, email, password);
  }

  @Post('/email-verify')
  //이메일 인증
  async verifyEmail(@Query() dto: VerifyEmailDto) {
    const { signupVerifyToken } = dto;
    await this.usersService.verifyEmail(signupVerifyToken);
  }

  @Post('/login')
  //로그인
  async login(@Body() dto: UserLoginDto) {
    const { email, password } = dto;
    await this.usersService.login(email, password);
  }

  @Get('/:id')
  //회원 조회
  async getUserInfo(@Param('id') id: string): Promise<string> {
    return await this.usersService.getUserInfo(id);
  }
}
