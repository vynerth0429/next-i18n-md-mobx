import { API } from './../api';
import { ApiEndpointsEnum } from './../api/endpoints';

export const createAuthStore = () => {
  return {
    currentAuth: null as (any | null),
    login(data: any): Promise<any> {
      this.currentAuth = null;
      return API.post<any>(ApiEndpointsEnum.LOGIN_USER, data);
    },
    logout(): Promise<unknown> {
      return API.del<any>(ApiEndpointsEnum.LOGOUT_USER);
    },
    get hasToken() {
      // Use own algorithm
      if (this.currentAuth) {
        return !!this.currentAuth.token;
      } else {
        return false;
      }
    },
  };
}

export type TAuthStore = ReturnType<typeof createAuthStore>;