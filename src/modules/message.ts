import { WeChatBotClient } from '../client';
import { ApiResponse } from '../types';

export class MessageModule {
  constructor(private client: WeChatBotClient) {}

  sendText(toWxid: string, content: string, token: string, atList: string[] = []): Promise<ApiResponse> {
    return this.client.request('/sendTextMessage', token, {
      toWxid, content, atWxidList: atList,
    });
  }

  sendImage(toWxid: string, imageUrl: string, token: string): Promise<ApiResponse> {
    return this.client.request('/sendImageMessage', token, { toWxid, imgUrl: imageUrl });
  }

  sendVoice(toWxid: string, silkUrl: string, voiceDuration: number, token: string): Promise<ApiResponse> {
    return this.client.request('/sendVoiceMessage', token, {
      toWxid, voiceUrl: silkUrl, voiceDuration,
    });
  }

  sendVideo(toWxid: string, videoUrl: string, thumbUrl: string, videoDuration: number, token: string): Promise<ApiResponse> {
    return this.client.request('/sendVedioMessage', token, {
      toWxid, videoUrl, thumbUrl, videoDuration,
    });
  }

  sendFile(toWxid: string, fileName: string, fileUrl: string, token: string): Promise<ApiResponse> {
    return this.client.request('/sendFileMessage', token, { toWxid, fileName, fileUrl });
  }

  sendLink(toWxid: string, title: string, desc: string, linkUrl: string, thumbUrl: string, token: string): Promise<ApiResponse> {
    return this.client.request('/sendLinkMessage', token, {
      toWxid, title, desc, linkUrl, thumbUrl,
    });
  }

  sendCard(toWxid: string, nickname: string, nameCardWxid: string, token: string): Promise<ApiResponse> {
    return this.client.request('/sendCardMessage', token, {
      toWxid, nickName: nickname, nameCardWxid,
    });
  }

  sendEmoji(toWxid: string, emojiMd5: string, emojiSize: number, token: string): Promise<ApiResponse> {
    return this.client.request('/sendEmojiMessage', token, {
      toWxid, emojiMd5, emojiSize,
    });
  }

  sendApp(toWxid: string, appmsg: string, token: string): Promise<ApiResponse> {
    return this.client.request('/sendAppMessage', token, { toWxid, appmsg });
  }

  sendMiniapp(
    toWxid: string, miniAppId: string, userName: string, title: string,
    coverImgUrl: string, pagePath: string, displayName: string, token: string
  ): Promise<ApiResponse> {
    return this.client.request('/sendMiniappMessage', token, {
      toWxid, miniAppId, userName, title, coverImgUrl, pagePath, displayName,
    });
  }

  sendLocation(toWxid: string, content: string, token: string): Promise<ApiResponse> {
    return this.client.request('/sendLocationMessage', token, { toWxid, content });
  }

  revokeMsg(toWxid: string, msgId: string, newMsgId: string, createTime: number, token: string): Promise<ApiResponse> {
    return this.client.request('/sendRevokeMessage', token, {
      toWxid, msgId, newMsgId, createTime,
    });
  }

  forwardFile(toWxid: string, xml: string, token: string): Promise<ApiResponse> {
    return this.client.request('/sendForwardFileMessage', token, { toWxid, xml });
  }

  forwardImage(toWxid: string, xml: string, token: string): Promise<ApiResponse> {
    return this.client.request('/sendForwardImageMessage', token, { toWxid, xml });
  }

  forwardVideo(toWxid: string, xml: string, token: string): Promise<ApiResponse> {
    return this.client.request('/sendForwardVideoMessage', token, { toWxid, xml });
  }

  forwardLink(toWxid: string, xml: string, token: string): Promise<ApiResponse> {
    return this.client.request('/sendForwardUrlMessage', token, { toWxid, xml });
  }

  forwardMiniapp(toWxid: string, xml: string, coverImgUrl: string, token: string): Promise<ApiResponse> {
    return this.client.request('/sendForwardMiniAppMessage', token, { toWxid, xml, coverImgUrl });
  }
}
