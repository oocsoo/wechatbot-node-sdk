import { WeChatBotClient } from '../client';
import { ApiResponse } from '../types';

export class LabelModule {
  constructor(private client: WeChatBotClient) {}

  addLabel(labelName: string, token: string): Promise<ApiResponse> {
    return this.client.request('/addLabel', token, { labelName });
  }

  listLabel(token: string): Promise<ApiResponse> {
    return this.client.request('/listLabel', token);
  }

  deleteLabel(labelIds: string, token: string): Promise<ApiResponse> {
    return this.client.request('/deleteLabel', token, { labelIds });
  }

  modifyFriendLabel(labelIds: string, wxIds: string[], token: string): Promise<ApiResponse> {
    return this.client.request('/modifyMemberList', token, { labelIds, wxIds });
  }
}
