import { adminApi } from "./api.base";
import type { LoginDto } from "./dto/login.dto";
import { CHECK_AUTH_API_URL, LOGIN_API_URL } from "./urls";

export class AuthRepo {
  static async login(data: LoginDto): Promise<{ accessToken: string }> {
    const res = await adminApi.post<{ accessToken: string }>(
      LOGIN_API_URL,
      data,
    );

    return res.data;
  }

  static async setAccessTokenFromLoginResp(data: LoginDto) {
    const token = await this.login(data);
    localStorage.setItem("admin_token", token.accessToken);
    return token;
  }

  static async validateToken(): Promise<boolean> {
    try {
      await adminApi.get(CHECK_AUTH_API_URL);
      //   console.log(JSON.stringify(resp.data, null, 2));
      return true;
    } catch (e) {
      //   console.log(JSON.stringify(e, null, 2));
      return false;
    }
  }
}
