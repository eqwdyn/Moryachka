import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Нет токена');
    }

    const token = authHeader.split(' ')[1];

    try {
      const payload = this.jwtService.verify(token) as {
        login: string;
        isAdmin: true;
      };

      if (!payload.isAdmin || payload.login !== process.env.ADMIN_LOGIN) {
        throw new UnauthorizedException('Доступ только для админов');
      }

      request.user = payload;
      return true;
    } catch {
      throw new UnauthorizedException('Невалидный токен');
    }
  }
}
