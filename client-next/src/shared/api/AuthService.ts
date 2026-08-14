import { api } from "@/shared/api/api.base";
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

interface LoginError {
  response: { status: number; statusText: string };
  status: number;
}

export class AuthService {
  static async login(dto: LoginDto): Promise<{ accessToken: string }> {
    try {
      const { data } = await api.post<{ accessToken: string }>(
        "/auth/login",
        dto,
      );

      return data;
    } catch (e: any) {
      console.error(JSON.stringify(e, null, 2));

      if (e.status >= 500) {
        throw new Error("Server Error");
      } else if (e.status < 500) {
        throw new Error("Client Error");
      } else if (e.message === "Network Error") {
        throw new Error("Network Error");
      }

      throw e;
    }
  }

  static async checkAuth(token: string): Promise<boolean> {
    try {
      await api.get(CHECK_AUTH_API_PATH, {
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
