import { WeChatBotClient } from '../client';
import { ApiResponse } from '../types';
import * as fs from 'fs';

export class DownModule {
  constructor(private client: WeChatBotClient) {}

  downloadSilkBase64(base64Data: string, savePath: string): boolean {
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(savePath, buffer);
    return true;
  }

  downloadSilkRequest(msgId: string, xml: string, token: string): Promise<ApiResponse> {
    return this.client.request('/downloadVoice', token, { msgId, xml });
  }

  downloadFile(xml: string, token: string): Promise<ApiResponse> {
    return this.client.request('/downloadFile', token, { xml });
  }

  downloadImage(type: number, xml: string, token: string): Promise<ApiResponse> {
    return this.client.request('/downloadImage', token, { type, xml });
  }

  downloadVideo(xml: string, token: string): Promise<ApiResponse> {
    return this.client.request('/downloadVideo', token, { xml });
  }

  downloadEmoji(emojiMd5: string, token: string): Promise<ApiResponse> {
    return this.client.request('/downloadEmoji', token, { emojiMd5 });
  }

  downloadCdn(aesKey: string, totalSize: string, type: string, fileId: string, suffix: string, token: string): Promise<ApiResponse> {
    return this.client.request('/downloadCdn', token, { aesKey, totalSize, type, fileId, suffix });
  }
}
