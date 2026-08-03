import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { AdminGuard } from 'src/auth/auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto } from 'src/auth/dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() dto: LoginDto) {
    const token = await this.authService.login(dto);
    return token;
  }

  @Get('/check')
  @UseGuards(AdminGuard)
  check() {
    return { status: 'success' };
  }
}
