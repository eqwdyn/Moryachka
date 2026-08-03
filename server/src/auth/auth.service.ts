import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private readonly ADMIN_LOGIN = process.env.ADMIN_LOGIN as string;
  private readonly ADMIN_PASSWORD = process.env.ADMIN_PASSWORD as string;

  constructor(private readonly jwtService: JwtService) {}

  async login(dto: LoginDto): Promise<{ accessToken: string }> {
    if (
      dto.login !== this.ADMIN_LOGIN ||
      dto.password !== this.ADMIN_PASSWORD
    ) {
      throw new UnauthorizedException('Неверный логин или пароль');
    }

    const payload = {
      login: this.ADMIN_LOGIN,
      isAdmin: true,
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '1h',
    });

    return { accessToken };
  }
}
