import { WeChatBotClient } from '../client';
import { ApiResponse } from '../types';

export class PersonalModule {
  constructor(private client: WeChatBotClient) {}

  getInfo(token: string): Promise<ApiResponse> {
    return this.client.request('/getPersonalInfo', token);
  }

  getQrcode(token: string): Promise<ApiResponse> {
    return this.client.request('/getQrCode', token);
  }

  getDeviceRecord(token: string): Promise<ApiResponse> {
    return this.client.request('/getSafetyInfo', token);
  }

  privacySettings(open: boolean, option: number, token: string): Promise<ApiResponse> {
    return this.client.request('/privacySettings', token, { open, option });
  }

  updateInfo(
    city: string, country: string, nickName: string,
    province: string, sex: number, signature: string, token: string
  ): Promise<ApiResponse> {
    return this.client.request('/updatePersonalInfo', token, {
      city, country, nickName, province, sex, signature,
    });
  }

  updateHeadImg(headImgUrl: string, token: string): Promise<ApiResponse> {
    return this.client.request('/updateHeadImg', token, { headImgUrl });
  }
}
