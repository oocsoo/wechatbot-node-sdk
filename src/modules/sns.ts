import { WeChatBotClient } from '../client';
import { ApiResponse } from '../types';

export class SnsModule {
  constructor(private client: WeChatBotClient) {}

  snsList(maxId: number, decrypt: boolean, firstPageMd5: string, token: string): Promise<ApiResponse> {
    return this.client.request('/snsList', token, { maxId, decrypt, firstPageMd5 });
  }

  friendsSnsList(maxId: number, decrypt: boolean, wxid: string, firstPageMd5: string, token: string): Promise<ApiResponse> {
    return this.client.request('/contactsSnsList', token, { maxId, decrypt, wxid, firstPageMd5 });
  }

  snsDetails(snsId: number, token: string): Promise<ApiResponse> {
    return this.client.request('/snsDetails', token, { snsId });
  }

  snsLike(snsId: number, operType: number, wxid: string, token: string): Promise<ApiResponse> {
    return this.client.request('/likeSns', token, { snsId, operType, wxid });
  }

  snsComment(snsId: number, operType: number, wxid: string, commentId: number, content: string, token: string): Promise<ApiResponse> {
    return this.client.request('/commentSns', token, { snsId, operType, wxid, commentId, content });
  }

  snsDelete(snsId: number, token: string): Promise<ApiResponse> {
    return this.client.request('/delSns', token, { snsId });
  }

  snsScope(option: number, token: string): Promise<ApiResponse> {
    return this.client.request('/snsVisibleScope', token, { option });
  }

  snsVisibilityEnable(enabled: boolean, token: string): Promise<ApiResponse> {
    return this.client.request('/strangerVisibilityEnabled', token, { enabled });
  }

  snsSetStatus(snsId: number, open: boolean, token: string): Promise<ApiResponse> {
    return this.client.request('/snsSetPrivacy', token, { snsId, open });
  }

  snsDownloadVideo(snsXml: string, token: string): Promise<ApiResponse> {
    return this.client.request('/downloadSnsVideo', token, { snsXml });
  }

  snsSendText(
    allowWxIds: string[], atWxIds: string[], disableWxIds: string[],
    content: string, privacy: boolean,
    allowTagIds: number[], disableTagIds: number[], token: string
  ): Promise<ApiResponse> {
    return this.client.request('/sendTextSns', token, {
      allowWxIds, atWxIds, disableWxIds, content, privacy, allowTagIds, disableTagIds,
    });
  }

  snsSendImg(
    allowWxIds: string[], atWxIds: string[], disableWxIds: string[],
    content: string, fileUrl: string, thumbUrl: string, fileMd5: string,
    length: number, width: number, height: number, privacy: boolean,
    allowTagIds: number[], disableTagIds: number[], token: string
  ): Promise<ApiResponse> {
    return this.client.request('/sendImgSns', token, {
      allowWxIds, atWxIds, disableWxIds, content,
      imgInfos: [{ fileUrl, thumbUrl, fileMd5, length, width, height }],
      privacy, allowTagIds, disableTagIds,
    });
  }

  snsUploadImage(imgUrls: string[], token: string): Promise<ApiResponse> {
    return this.client.request('/uploadSnsImage', token, { imgUrls });
  }

  snsSendVideo(
    allowWxIds: string[], atWxIds: string[], disableWxIds: string[],
    content: string, fileUrl: string, thumbUrl: string, fileMd5: string,
    length: number, privacy: boolean,
    allowTagIds: number[], disableTagIds: number[], token: string
  ): Promise<ApiResponse> {
    return this.client.request('/sendVideoSns', token, {
      allowWxIds, atWxIds, disableWxIds, content,
      videoInfo: { fileUrl, thumbUrl, fileMd5, length },
      privacy, allowTagIds, disableTagIds,
    });
  }

  snsUploadVideo(thumbUrl: string, videoUrl: string, token: string): Promise<ApiResponse> {
    return this.client.request('/uploadSnsVideo', token, { thumbUrl, videoUrl });
  }

  snsSendUrl(
    allowWxIds: string[], atWxIds: string[], disableWxIds: string[],
    content: string, description: string, title: string,
    linkUrl: string, thumbUrl: string, privacy: boolean,
    allowTagIds: number[], disableTagIds: number[], token: string
  ): Promise<ApiResponse> {
    return this.client.request('/sendUrlSns', token, {
      allowWxIds, atWxIds, disableWxIds, content, description, title, linkUrl, thumbUrl,
      privacy, allowTagIds, disableTagIds,
    });
  }

  snsForward(
    allowWxIds: string[], atWxIds: string[], disableWxIds: string[],
    snsXml: string, privacy: boolean,
    allowTagIds: number[], disableTagIds: number[], token: string
  ): Promise<ApiResponse> {
    return this.client.request('/forwardSns', token, {
      allowWxIds, atWxIds, disableWxIds, snsXml, privacy, allowTagIds, disableTagIds,
    });
  }
}
