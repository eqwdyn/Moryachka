/**
 * Setting token to Local Storage
 */

export function setAccessToken(token: string): void {
  localStorage.setItem("access_token", token);
}
