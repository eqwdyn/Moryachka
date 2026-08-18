import { apiSSR } from "@/shared/api/api.base";
import { CHECK_AUTH_API_PATH, LOGIN_API_PATH } from "@/shared/config/apiPaths";

interface LoginDto {
  login: string;
  password: string;
}

//   isAxiosError: true,
//   request: <ref *1> ClientRequest {
//   response: {
//     status: 401,
//     statusText: 'Unauthorized',
//     data: {
//       message: 'Неверный логин или пароль',
//       error: 'Unauthorized',
//       statusCode: 401
//     }
//   },
//   status: 401,
// }

export class AuthService {
  static async login(dto: LoginDto): Promise<{ accessToken: string }> {
    const { data } = await apiSSR.post<{ accessToken: string }>(
      LOGIN_API_PATH,
      dto,
    );

    return data;
  }

  static async checkAuth(token: string): Promise<boolean> {
    try {
      await apiSSR.get(CHECK_AUTH_API_PATH, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return true;
    } catch (e) {
      return false;
    }
  }
}
