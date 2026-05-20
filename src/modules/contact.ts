import { WeChatBotClient } from '../client';
import { ApiResponse } from '../types';

export class ContactModule {
  constructor(private client: WeChatBotClient) {}

  contactsList(token: string): Promise<ApiResponse> {
    return this.client.request('/fetchContactsList', token);
  }

  contactsListCache(token: string): Promise<ApiResponse> {
    return this.client.request('/fetchContactsListCache', token);
  }

  briefInfo(wxids: string[], token: string): Promise<ApiResponse> {
    return this.client.request('/getBriefInfo', token, { wxids });
  }

  detailInfo(wxids: string[], token: string): Promise<ApiResponse> {
    return this.client.request('/getDetailInfo', token, { wxids });
  }

  searchFriend(contactsInfo: string, token: string): Promise<ApiResponse> {
    return this.client.request('/search', token, { contactsInfo });
  }

  addContacts(scene: number, content: string, v4: string, v3: string, option: number, token: string): Promise<ApiResponse> {
    return this.client.request('/addContacts', token, { scene, content, v4, v3, option });
  }

  deleteFriend(wxid: string, token: string): Promise<ApiResponse> {
    return this.client.request('/deleteFriend', token, { wxid });
  }

  setFriendPermissions(wxid: string, onlyChat: boolean, token: string): Promise<ApiResponse> {
    return this.client.request('/setFriendPermissions', token, { wxid, onlyChat });
  }

  setFriendRemark(wxid: string, remark: string, token: string): Promise<ApiResponse> {
    return this.client.request('/setFriendRemark', token, { wxid, remark });
  }

  getPhoneList(token: string, phones: string[] | null = null): Promise<ApiResponse> {
    return this.client.request('/getPhoneAddressList', token, { phones });
  }

  uploadPhoneList(phones: string[], opType: number, token: string): Promise<ApiResponse> {
    return this.client.request('/uploadPhoneAddressList', token, { phones, opType });
  }

  imSearch(scene: number, content: string, token: string): Promise<ApiResponse> {
    return this.client.request('/imSearch', token, { scene, content });
  }

  addImFriends(v3: string, v4: string, token: string): Promise<ApiResponse> {
    return this.client.request('/imAddFriends', token, { v3, v4 });
  }

  syncImFriends(token: string): Promise<ApiResponse> {
    return this.client.request('/imSyncFriends', token);
  }

  detailImFriends(toUserName: string, token: string): Promise<ApiResponse> {
    return this.client.request('/imDetailFriends', token, { toUserName });
  }

  checkRelation(wxids: string[], token: string): Promise<ApiResponse> {
    return this.client.request('/checkRelation', token, { wxids });
  }
}
