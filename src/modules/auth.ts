import { WeChatBotClient } from '../client';
import { ApiResponse } from '../types';

export class AuthModule {
  constructor(private client: WeChatBotClient) {}

  getQrcode(token: string, deviceType: string = '', aid: string = ''): Promise<ApiResponse> {
    return this.client.request('/getLoginQrCode', token, { type: deviceType, aid });
  }

  refreshStatus(uuid: string, token: string, capCode: string = ''): Promise<ApiResponse> {
    return this.client.request('/refreshStatus', token, {
      uuid,
      auto_sliding: 'false',
      cap_code: capCode,
    });
  }

  dialogLogin(token: string): Promise<ApiResponse> {
    return this.client.request('/dialogLogin', token);
  }

  reconnection(token: string): Promise<ApiResponse> {
    return this.client.request('/reconnection', token);
  }

  logout(token: string): Promise<ApiResponse> {
    return this.client.request('/logout', token);
  }

  checkStatus(token: string): Promise<ApiResponse> {
    return this.client.request('/checkOnline', token);
  }
}
