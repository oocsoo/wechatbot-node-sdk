import { WeChatBotClient } from '../client';
import { ApiResponse } from '../types';

export class FinderModule {
  constructor(private client: WeChatBotClient) {}

  createFinder(proxyIp: string, signature: string, headImg: string, nickName: string, sex: number, token: string): Promise<ApiResponse> {
    return this.client.request('/createFinder', token, { proxyIp, signature, headImg, nickName, sex });
  }

  getProfile(token: string, proxyIp: string = ''): Promise<ApiResponse> {
    return this.client.request('/getProfile', token, { proxyIp });
  }

  updateProfile(
    myUserName: string, myRoleType: number, token: string,
    options: { proxyIp?: string; signature?: string; headImg?: string; nickName?: string; sex?: number; city?: string; province?: string; country?: string } = {}
  ): Promise<ApiResponse> {
    const payload: Record<string, any> = { myUserName, myRoleType, proxyIp: options.proxyIp ?? '' };
    if (options.signature) payload.signature = options.signature;
    if (options.headImg) payload.headImg = options.headImg;
    if (options.nickName) payload.nickName = options.nickName;
    if (options.sex !== undefined) payload.sex = options.sex;
    if (options.city) payload.city = options.city;
    if (options.province) payload.province = options.province;
    if (options.country) payload.country = options.country;
    return this.client.request('/updateProfile', token, payload);
  }

  getQrCode(myUserName: string, myRoleType: number, token: string, proxyIp: string = ''): Promise<ApiResponse> {
    return this.client.request('/finderGetQrCode', token, { proxyIp, myUserName, myRoleType });
  }

  finderSearch(
    content: string, token: string,
    options: { proxyIp?: string; category?: number; filter?: number; page?: number; cookie?: string; searchId?: string; offset?: number } = {}
  ): Promise<ApiResponse> {
    return this.client.request('/finderSearch', token, {
      proxyIp: options.proxyIp ?? '', content,
      category: options.category ?? 1, filter: options.filter ?? 0,
      page: options.page ?? 0, cookie: options.cookie ?? '',
      searchId: options.searchId ?? '', offset: options.offset ?? 0,
    });
  }

  follow(
    myUserName: string, myRoleType: number, opType: number, toUserName: string, token: string,
    options: { proxyIp?: string; searchInfo?: { cookies: string; searchId: string; docId: string } } = {}
  ): Promise<ApiResponse> {
    return this.client.request('/follow', token, {
      proxyIp: options.proxyIp ?? '', myUserName, myRoleType, opType, toUserName,
      searchInfo: options.searchInfo ?? { cookies: '', searchId: '', docId: '' },
    });
  }

  followList(myUserName: string, myRoleType: number, token: string, proxyIp: string = '', lastBuffer: string = ''): Promise<ApiResponse> {
    return this.client.request('/followList', token, { proxyIp, myUserName, lastBuffer, myRoleType });
  }

  searchFollow(myUserName: string, myRoleType: number, toUserName: string, keyword: string, token: string): Promise<ApiResponse> {
    return this.client.request('/searchFollow', token, { myUserName, myRoleType, toUserName, keyword });
  }

  scanFollow(
    myUserName: string, myRoleType: number, qrContent: string, token: string,
    proxyIp: string = '', objectId: string = '', objectNonceId: string = ''
  ): Promise<ApiResponse> {
    return this.client.request('/scanFollow', token, { proxyIp, myUserName, myRoleType, qrContent, objectId, objectNonceId });
  }

  userPage(
    toUserName: string, token: string,
    options: { proxyIp?: string; lastBuffer?: string; maxId?: number; searchInfo?: { cookies: string; searchId: string } } = {}
  ): Promise<ApiResponse> {
    const payload: Record<string, any> = {
      proxyIp: options.proxyIp ?? '', lastBuffer: options.lastBuffer ?? '',
      toUserName, maxId: options.maxId ?? 0,
    };
    if (options.searchInfo) payload.searchInfo = options.searchInfo;
    return this.client.request('/userPage', token, payload);
  }

  comment(
    myUserName: string, opType: number, objectNonceId: string, sessionBuffer: string,
    objectId: number, myRoleType: number, content: string, commentId: string, token: string,
    options: { proxyIp?: string; replyUserName?: string; refCommentId?: number; rootCommentId?: number } = {}
  ): Promise<ApiResponse> {
    return this.client.request('/comment', token, {
      proxyIp: options.proxyIp ?? '', myUserName, opType, objectNonceId, sessionBuffer,
      objectId, myRoleType, content, commentId,
      replyUserName: options.replyUserName ?? '',
      refCommentId: options.refCommentId ?? 0,
      rootCommentId: options.rootCommentId ?? 0,
    });
  }

  commentList(
    sessionBuffer: string, objectId: string, token: string,
    options: { proxyIp?: string; rootCommentId?: number; refCommentId?: number; objectNonceId?: string; lastBuffer?: string } = {}
  ): Promise<ApiResponse> {
    return this.client.request('/commentList', token, {
      proxyIp: options.proxyIp ?? '', rootCommentId: options.rootCommentId ?? 0,
      refCommentId: options.refCommentId ?? 0, objectNonceId: options.objectNonceId ?? '',
      sessionBuffer, lastBuffer: options.lastBuffer ?? '', objectId,
    });
  }

  browse(myUserName: string, objectNonceId: string, sessionBuffer: string, objectId: number, myRoleType: number, token: string, proxyIp: string = ''): Promise<ApiResponse> {
    return this.client.request('/browse', token, { proxyIp, myUserName, objectNonceId, sessionBuffer, objectId, myRoleType });
  }

  publishFinderWeb(title: string, videoUrl: string, thumbUrl: string, description: string, token: string): Promise<ApiResponse> {
    return this.client.request('/publishFinderWeb', token, { title, videoUrl, thumbUrl, description });
  }

  uploadFinderVideo(videoUrl: string, coverImgUrl: string, token: string, proxyIp: string = ''): Promise<ApiResponse> {
    return this.client.request('/uploadFinderVideo', token, { proxyIp, videoUrl, coverImgUrl });
  }

  publishFinderCdn(
    myUserName: string, myRoleType: number, description: string, videoCdn: object, token: string,
    options: { proxyIp?: string; topic?: string[] } = {}
  ): Promise<ApiResponse> {
    return this.client.request('/publishFinderCdn', token, {
      proxyIp: options.proxyIp ?? '', topic: options.topic ?? [],
      myUserName, myRoleType, description, videoCdn,
    });
  }

  mentionList(myUserName: string, myRoleType: number, reqScene: number, token: string, lastBuff: string = ''): Promise<ApiResponse> {
    return this.client.request('/mentionList', token, { myUserName, lastBuff, myRoleType, reqScene });
  }

  likeFavList(myUserName: string, myRoleType: number, flag: number, token: string, proxyIp: string = '', lastBuffer: string = ''): Promise<ApiResponse> {
    return this.client.request('/likeFavList', token, { proxyIp, myUserName, lastBuffer, myRoleType, flag });
  }

  idFav(
    myUserName: string, opType: number, objectNonceId: string, sessionBuffer: string,
    objectId: number, toUserName: string, myRoleType: number, token: string, proxyIp: string = ''
  ): Promise<ApiResponse> {
    return this.client.request('/idFav', token, {
      proxyIp, myUserName, opType, objectNonceId, sessionBuffer, objectId, toUserName, myRoleType,
    });
  }

  idLike(
    myUserName: string, opType: number, objectNonceId: string, sessionBuffer: string,
    objectId: number, toUserName: string, myRoleType: number, token: string, proxyIp: string = ''
  ): Promise<ApiResponse> {
    return this.client.request('/idLike', token, {
      proxyIp, myUserName, opType, objectNonceId, sessionBuffer, objectId, toUserName, myRoleType,
    });
  }

  finderOpt(myUserName: string, myRoleType: number, toUserName: string, opType: number, id: string, remain: number, token: string): Promise<ApiResponse> {
    return this.client.request('/finderOpt', token, { myUserName, myRoleType, toUserName, opType, id, remain });
  }

  sendFinderMsg(
    toWxid: string, id: number, username: string, nickname: string, headUrl: string,
    nonceId: string, mediaType: string, width: string, height: string, url: string,
    thumbUrl: string, thumbUrlToken: string, description: string, videoPlayLen: string,
    token: string, proxyIp: string = ''
  ): Promise<ApiResponse> {
    return this.client.request('/sendFinderMsg', token, {
      proxyIp, toWxid, id, username, nickname, headUrl, nonceId, mediaType,
      width, height, url, thumbUrl, thumbUrlToken, description, videoPlayLen,
    });
  }

  sendFinderSns(
    allowWxIds: string[], atWxIds: string[], disableWxIds: string[],
    id: number, username: string, nickname: string, headUrl: string,
    nonceId: string, mediaType: string, width: string, height: string, url: string,
    thumbUrl: string, thumbUrlToken: string, description: string, videoPlayLen: string,
    token: string, proxyIp: string = ''
  ): Promise<ApiResponse> {
    return this.client.request('/sendFinderSns', token, {
      proxyIp, allowWxIds, atWxIds, disableWxIds, id, username, nickname, headUrl,
      nonceId, mediaType, width, height, url, thumbUrl, thumbUrlToken, description, videoPlayLen,
    });
  }

  syncPrivateLetterMsg(token: string, proxyIp: string = '', keyBuff: string = ''): Promise<ApiResponse> {
    return this.client.request('/syncPrivateLetterMsg', token, { proxyIp, keyBuff });
  }

  contactList(myUserName: string, queryInfo: string, myRoleType: number, token: string, proxyIp: string = ''): Promise<ApiResponse> {
    return this.client.request('/contactList', token, { proxyIp, myUserName, queryInfo, myRoleType });
  }

  postPrivateLetter(content: string, msgSessionId: string, myUserName: string, toUserName: string, token: string, proxyIp: string = ''): Promise<ApiResponse> {
    return this.client.request('/postPrivateLetter', token, { proxyIp, content, msgSessionId, myUserName, toUserName });
  }

  postPrivateLetterImg(imgUrl: string, msgSessionId: string, myUserName: string, toUserName: string, token: string, proxyIp: string = ''): Promise<ApiResponse> {
    return this.client.request('/postPrivateLetterImg', token, { proxyIp, imgUrl, msgSessionId, myUserName, toUserName });
  }

  scanBrowse(myUserName: string, myRoleType: number, qrContent: string, objectId: number, token: string, proxyIp: string = ''): Promise<ApiResponse> {
    return this.client.request('/scanBrowse', token, { proxyIp, myUserName, myRoleType, qrContent, objectId });
  }

  scanComment(
    myUserName: string, myRoleType: number, qrContent: string, objectId: number, commentContent: string, token: string,
    options: { proxyIp?: string; replyUsername?: string; refCommentId?: number; rootCommentId?: number } = {}
  ): Promise<ApiResponse> {
    return this.client.request('/scanComment', token, {
      proxyIp: options.proxyIp ?? '', myUserName, myRoleType, qrContent, objectId, commentContent,
      replyUsername: options.replyUsername ?? '',
      refCommentId: options.refCommentId ?? 0,
      rootCommentId: options.rootCommentId ?? 0,
    });
  }

  scanFav(myUserName: string, myRoleType: number, qrContent: string, objectId: number, token: string, proxyIp: string = ''): Promise<ApiResponse> {
    return this.client.request('/scanFav', token, { proxyIp, myUserName, myRoleType, qrContent, objectId });
  }

  scanLike(myUserName: string, myRoleType: number, qrContent: string, objectId: number, token: string, proxyIp: string = ''): Promise<ApiResponse> {
    return this.client.request('/scanLike', token, { proxyIp, myUserName, myRoleType, qrContent, objectId });
  }

  scanLoginChannels(qrContent: string, token: string, proxyIp: string = ''): Promise<ApiResponse> {
    return this.client.request('/scanLoginChannels', token, { proxyIp, qrContent });
  }

  scanQrCode(myUserName: string, myRoleType: number, qrContent: string, token: string, proxyIp: string = ''): Promise<ApiResponse> {
    return this.client.request('/scanQrCode', token, { proxyIp, myUserName, myRoleType, qrContent });
  }
}
