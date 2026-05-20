import { WeChatBotClient } from '../client';
import { ApiResponse } from '../types';

export class GroupModule {
  constructor(private client: WeChatBotClient) {}

  createGroup(wxids: string[], token: string): Promise<ApiResponse> {
    return this.client.request('/createGroup', token, { wxids });
  }

  modifyGroupName(chatroomName: string, chatroomId: string, token: string): Promise<ApiResponse> {
    return this.client.request('/modifyGroupName', token, { chatroomName, chatroomId });
  }

  modifyGroupRemark(chatroomRemark: string, chatroomId: string, token: string): Promise<ApiResponse> {
    return this.client.request('/modifyGroupRemark', token, { chatroomRemark, chatroomId });
  }

  modifySelfNicknameInGroup(nickName: string, chatroomId: string, token: string): Promise<ApiResponse> {
    return this.client.request('/modifyGroupNickNameForSelf', token, { nickName, chatroomId });
  }

  inviteGroupMember(wxids: string, chatroomId: string, reason: string, token: string): Promise<ApiResponse> {
    return this.client.request('/inviteMember', token, { wxids, chatroomId, reason });
  }

  removeGroupMember(wxids: string, chatroomId: string, token: string): Promise<ApiResponse> {
    return this.client.request('/removeMember', token, { wxids, chatroomId });
  }

  quitGroup(chatroomId: string, token: string): Promise<ApiResponse> {
    return this.client.request('/quitGroup', token, { chatroomId });
  }

  disbandGroup(chatroomId: string, token: string): Promise<ApiResponse> {
    return this.client.request('/disbandGroup', token, { chatroomId });
  }

  groupInfo(chatroomId: string, token: string): Promise<ApiResponse> {
    return this.client.request('/getGroupInfo', token, { chatroomId });
  }

  groupMember(chatroomId: string, token: string): Promise<ApiResponse> {
    return this.client.request('/getGroupMemberList', token, { chatroomId });
  }

  groupMemberDetail(chatroomId: string, memberWxids: string[], token: string): Promise<ApiResponse> {
    return this.client.request('/getGroupMemberDetail', token, { chatroomId, memberWxids });
  }

  getAnnouncement(chatroomId: string, token: string): Promise<ApiResponse> {
    return this.client.request('/getGroupAnnouncement', token, { chatroomId });
  }

  setAnnouncement(chatroomId: string, content: string, token: string): Promise<ApiResponse> {
    return this.client.request('/setGroupAnnouncement', token, { chatroomId, content });
  }

  agreeJoinGroup(url: string, token: string): Promise<ApiResponse> {
    return this.client.request('/agreeJoinGroup', token, { url });
  }

  addGroupMemberAsFriend(chatroomId: string, content: string, memberWxid: string, token: string): Promise<ApiResponse> {
    return this.client.request('/addGroupMemberAsFriend', token, { chatroomId, content, memberWxid });
  }

  getGroupQr(chatroomId: string, token: string): Promise<ApiResponse> {
    return this.client.request('/getGroupQrCode', token, { chatroomId });
  }

  saveContractList(chatroomId: string, operType: number, token: string): Promise<ApiResponse> {
    return this.client.request('/saveContractList', token, { chatroomId, operType });
  }

  adminOperate(chatroomId: string, operType: number, wxids: string[], token: string): Promise<ApiResponse> {
    return this.client.request('/adminOperate', token, { chatroomId, operType, wxids });
  }

  pinnedChat(chatroomId: string, top: boolean, token: string): Promise<ApiResponse> {
    return this.client.request('/pinnedChat', token, { chatroomId, top });
  }

  setMsgSilence(chatroomId: string, silence: boolean, token: string): Promise<ApiResponse> {
    return this.client.request('/setMsgSilence', token, { chatroomId, silence });
  }

  joinGroupByQr(qrUrl: string, token: string): Promise<ApiResponse> {
    return this.client.request('/joinGroupUsingQRCode', token, { qrUrl });
  }

  applyGroupApprove(chatroomId: string, msgContent: string, newMsgId: string, token: string): Promise<ApiResponse> {
    return this.client.request('/groupAccessApplyCheckApprove', token, { chatroomId, msgContent, newMsgId });
  }
}
