interface ApiResponse<T = any> {
    ret: number;
    msg: string;
    data: T | null;
}
interface ClientOptions {
    baseUrl?: string;
    timeout?: number;
}

declare class AuthModule {
    private client;
    constructor(client: WeChatBotClient);
    getQrcode(token: string, deviceType?: string, aid?: string): Promise<ApiResponse>;
    refreshStatus(uuid: string, token: string, capCode?: string): Promise<ApiResponse>;
    dialogLogin(token: string): Promise<ApiResponse>;
    reconnection(token: string): Promise<ApiResponse>;
    logout(token: string): Promise<ApiResponse>;
    checkStatus(token: string): Promise<ApiResponse>;
}

declare class MessageModule {
    private client;
    constructor(client: WeChatBotClient);
    sendText(toWxid: string, content: string, token: string, atList?: string[]): Promise<ApiResponse>;
    sendImage(toWxid: string, imageUrl: string, token: string): Promise<ApiResponse>;
    sendVoice(toWxid: string, silkUrl: string, voiceDuration: number, token: string): Promise<ApiResponse>;
    sendVideo(toWxid: string, videoUrl: string, thumbUrl: string, videoDuration: number, token: string): Promise<ApiResponse>;
    sendFile(toWxid: string, fileName: string, fileUrl: string, token: string): Promise<ApiResponse>;
    sendLink(toWxid: string, title: string, desc: string, linkUrl: string, thumbUrl: string, token: string): Promise<ApiResponse>;
    sendCard(toWxid: string, nickname: string, nameCardWxid: string, token: string): Promise<ApiResponse>;
    sendEmoji(toWxid: string, emojiMd5: string, emojiSize: number, token: string): Promise<ApiResponse>;
    sendApp(toWxid: string, appmsg: string, token: string): Promise<ApiResponse>;
    sendMiniapp(toWxid: string, miniAppId: string, userName: string, title: string, coverImgUrl: string, pagePath: string, displayName: string, token: string): Promise<ApiResponse>;
    sendLocation(toWxid: string, content: string, token: string): Promise<ApiResponse>;
    revokeMsg(toWxid: string, msgId: string, newMsgId: string, createTime: number, token: string): Promise<ApiResponse>;
    forwardFile(toWxid: string, xml: string, token: string): Promise<ApiResponse>;
    forwardImage(toWxid: string, xml: string, token: string): Promise<ApiResponse>;
    forwardVideo(toWxid: string, xml: string, token: string): Promise<ApiResponse>;
    forwardLink(toWxid: string, xml: string, token: string): Promise<ApiResponse>;
    forwardMiniapp(toWxid: string, xml: string, coverImgUrl: string, token: string): Promise<ApiResponse>;
}

declare class GroupModule {
    private client;
    constructor(client: WeChatBotClient);
    createGroup(wxids: string[], token: string): Promise<ApiResponse>;
    modifyGroupName(chatroomName: string, chatroomId: string, token: string): Promise<ApiResponse>;
    modifyGroupRemark(chatroomRemark: string, chatroomId: string, token: string): Promise<ApiResponse>;
    modifySelfNicknameInGroup(nickName: string, chatroomId: string, token: string): Promise<ApiResponse>;
    inviteGroupMember(wxids: string, chatroomId: string, reason: string, token: string): Promise<ApiResponse>;
    removeGroupMember(wxids: string, chatroomId: string, token: string): Promise<ApiResponse>;
    quitGroup(chatroomId: string, token: string): Promise<ApiResponse>;
    disbandGroup(chatroomId: string, token: string): Promise<ApiResponse>;
    groupInfo(chatroomId: string, token: string): Promise<ApiResponse>;
    groupMember(chatroomId: string, token: string): Promise<ApiResponse>;
    groupMemberDetail(chatroomId: string, memberWxids: string[], token: string): Promise<ApiResponse>;
    getAnnouncement(chatroomId: string, token: string): Promise<ApiResponse>;
    setAnnouncement(chatroomId: string, content: string, token: string): Promise<ApiResponse>;
    agreeJoinGroup(url: string, token: string): Promise<ApiResponse>;
    addGroupMemberAsFriend(chatroomId: string, content: string, memberWxid: string, token: string): Promise<ApiResponse>;
    getGroupQr(chatroomId: string, token: string): Promise<ApiResponse>;
    saveContractList(chatroomId: string, operType: number, token: string): Promise<ApiResponse>;
    adminOperate(chatroomId: string, operType: number, wxids: string[], token: string): Promise<ApiResponse>;
    pinnedChat(chatroomId: string, top: boolean, token: string): Promise<ApiResponse>;
    setMsgSilence(chatroomId: string, silence: boolean, token: string): Promise<ApiResponse>;
    joinGroupByQr(qrUrl: string, token: string): Promise<ApiResponse>;
    applyGroupApprove(chatroomId: string, msgContent: string, newMsgId: string, token: string): Promise<ApiResponse>;
}

declare class ContactModule {
    private client;
    constructor(client: WeChatBotClient);
    contactsList(token: string): Promise<ApiResponse>;
    contactsListCache(token: string): Promise<ApiResponse>;
    briefInfo(wxids: string[], token: string): Promise<ApiResponse>;
    detailInfo(wxids: string[], token: string): Promise<ApiResponse>;
    searchFriend(contactsInfo: string, token: string): Promise<ApiResponse>;
    addContacts(scene: number, content: string, v4: string, v3: string, option: number, token: string): Promise<ApiResponse>;
    deleteFriend(wxid: string, token: string): Promise<ApiResponse>;
    setFriendPermissions(wxid: string, onlyChat: boolean, token: string): Promise<ApiResponse>;
    setFriendRemark(wxid: string, remark: string, token: string): Promise<ApiResponse>;
    getPhoneList(token: string, phones?: string[] | null): Promise<ApiResponse>;
    uploadPhoneList(phones: string[], opType: number, token: string): Promise<ApiResponse>;
    imSearch(scene: number, content: string, token: string): Promise<ApiResponse>;
    addImFriends(v3: string, v4: string, token: string): Promise<ApiResponse>;
    syncImFriends(token: string): Promise<ApiResponse>;
    detailImFriends(toUserName: string, token: string): Promise<ApiResponse>;
    checkRelation(wxids: string[], token: string): Promise<ApiResponse>;
}

declare class PersonalModule {
    private client;
    constructor(client: WeChatBotClient);
    getInfo(token: string): Promise<ApiResponse>;
    getQrcode(token: string): Promise<ApiResponse>;
    getDeviceRecord(token: string): Promise<ApiResponse>;
    privacySettings(open: boolean, option: number, token: string): Promise<ApiResponse>;
    updateInfo(city: string, country: string, nickName: string, province: string, sex: number, signature: string, token: string): Promise<ApiResponse>;
    updateHeadImg(headImgUrl: string, token: string): Promise<ApiResponse>;
}

declare class FavoriteModule {
    private client;
    constructor(client: WeChatBotClient);
    syncFavorite(syncKey: string, token: string): Promise<ApiResponse>;
    getFavorite(favId: number, token: string): Promise<ApiResponse>;
    deleteFavorite(favId: number, token: string): Promise<ApiResponse>;
}

declare class LabelModule {
    private client;
    constructor(client: WeChatBotClient);
    addLabel(labelName: string, token: string): Promise<ApiResponse>;
    listLabel(token: string): Promise<ApiResponse>;
    deleteLabel(labelIds: string, token: string): Promise<ApiResponse>;
    modifyFriendLabel(labelIds: string, wxIds: string[], token: string): Promise<ApiResponse>;
}

declare class DownModule {
    private client;
    constructor(client: WeChatBotClient);
    downloadSilkBase64(base64Data: string, savePath: string): boolean;
    downloadSilkRequest(msgId: string, xml: string, token: string): Promise<ApiResponse>;
    downloadFile(xml: string, token: string): Promise<ApiResponse>;
    downloadImage(type: number, xml: string, token: string): Promise<ApiResponse>;
    downloadVideo(xml: string, token: string): Promise<ApiResponse>;
    downloadEmoji(emojiMd5: string, token: string): Promise<ApiResponse>;
    downloadCdn(aesKey: string, totalSize: string, type: string, fileId: string, suffix: string, token: string): Promise<ApiResponse>;
}

declare class SnsModule {
    private client;
    constructor(client: WeChatBotClient);
    snsList(maxId: number, decrypt: boolean, firstPageMd5: string, token: string): Promise<ApiResponse>;
    friendsSnsList(maxId: number, decrypt: boolean, wxid: string, firstPageMd5: string, token: string): Promise<ApiResponse>;
    snsDetails(snsId: number, token: string): Promise<ApiResponse>;
    snsLike(snsId: number, operType: number, wxid: string, token: string): Promise<ApiResponse>;
    snsComment(snsId: number, operType: number, wxid: string, commentId: number, content: string, token: string): Promise<ApiResponse>;
    snsDelete(snsId: number, token: string): Promise<ApiResponse>;
    snsScope(option: number, token: string): Promise<ApiResponse>;
    snsVisibilityEnable(enabled: boolean, token: string): Promise<ApiResponse>;
    snsSetStatus(snsId: number, open: boolean, token: string): Promise<ApiResponse>;
    snsDownloadVideo(snsXml: string, token: string): Promise<ApiResponse>;
    snsSendText(allowWxIds: string[], atWxIds: string[], disableWxIds: string[], content: string, privacy: boolean, allowTagIds: number[], disableTagIds: number[], token: string): Promise<ApiResponse>;
    snsSendImg(allowWxIds: string[], atWxIds: string[], disableWxIds: string[], content: string, fileUrl: string, thumbUrl: string, fileMd5: string, length: number, width: number, height: number, privacy: boolean, allowTagIds: number[], disableTagIds: number[], token: string): Promise<ApiResponse>;
    snsUploadImage(imgUrls: string[], token: string): Promise<ApiResponse>;
    snsSendVideo(allowWxIds: string[], atWxIds: string[], disableWxIds: string[], content: string, fileUrl: string, thumbUrl: string, fileMd5: string, length: number, privacy: boolean, allowTagIds: number[], disableTagIds: number[], token: string): Promise<ApiResponse>;
    snsUploadVideo(thumbUrl: string, videoUrl: string, token: string): Promise<ApiResponse>;
    snsSendUrl(allowWxIds: string[], atWxIds: string[], disableWxIds: string[], content: string, description: string, title: string, linkUrl: string, thumbUrl: string, privacy: boolean, allowTagIds: number[], disableTagIds: number[], token: string): Promise<ApiResponse>;
    snsForward(allowWxIds: string[], atWxIds: string[], disableWxIds: string[], snsXml: string, privacy: boolean, allowTagIds: number[], disableTagIds: number[], token: string): Promise<ApiResponse>;
}

declare class FinderModule {
    private client;
    constructor(client: WeChatBotClient);
    createFinder(proxyIp: string, signature: string, headImg: string, nickName: string, sex: number, token: string): Promise<ApiResponse>;
    getProfile(token: string, proxyIp?: string): Promise<ApiResponse>;
    updateProfile(myUserName: string, myRoleType: number, token: string, options?: {
        proxyIp?: string;
        signature?: string;
        headImg?: string;
        nickName?: string;
        sex?: number;
        city?: string;
        province?: string;
        country?: string;
    }): Promise<ApiResponse>;
    getQrCode(myUserName: string, myRoleType: number, token: string, proxyIp?: string): Promise<ApiResponse>;
    finderSearch(content: string, token: string, options?: {
        proxyIp?: string;
        category?: number;
        filter?: number;
        page?: number;
        cookie?: string;
        searchId?: string;
        offset?: number;
    }): Promise<ApiResponse>;
    follow(myUserName: string, myRoleType: number, opType: number, toUserName: string, token: string, options?: {
        proxyIp?: string;
        searchInfo?: {
            cookies: string;
            searchId: string;
            docId: string;
        };
    }): Promise<ApiResponse>;
    followList(myUserName: string, myRoleType: number, token: string, proxyIp?: string, lastBuffer?: string): Promise<ApiResponse>;
    searchFollow(myUserName: string, myRoleType: number, toUserName: string, keyword: string, token: string): Promise<ApiResponse>;
    scanFollow(myUserName: string, myRoleType: number, qrContent: string, token: string, proxyIp?: string, objectId?: string, objectNonceId?: string): Promise<ApiResponse>;
    userPage(toUserName: string, token: string, options?: {
        proxyIp?: string;
        lastBuffer?: string;
        maxId?: number;
        searchInfo?: {
            cookies: string;
            searchId: string;
        };
    }): Promise<ApiResponse>;
    comment(myUserName: string, opType: number, objectNonceId: string, sessionBuffer: string, objectId: number, myRoleType: number, content: string, commentId: string, token: string, options?: {
        proxyIp?: string;
        replyUserName?: string;
        refCommentId?: number;
        rootCommentId?: number;
    }): Promise<ApiResponse>;
    commentList(sessionBuffer: string, objectId: string, token: string, options?: {
        proxyIp?: string;
        rootCommentId?: number;
        refCommentId?: number;
        objectNonceId?: string;
        lastBuffer?: string;
    }): Promise<ApiResponse>;
    browse(myUserName: string, objectNonceId: string, sessionBuffer: string, objectId: number, myRoleType: number, token: string, proxyIp?: string): Promise<ApiResponse>;
    publishFinderWeb(title: string, videoUrl: string, thumbUrl: string, description: string, token: string): Promise<ApiResponse>;
    uploadFinderVideo(videoUrl: string, coverImgUrl: string, token: string, proxyIp?: string): Promise<ApiResponse>;
    publishFinderCdn(myUserName: string, myRoleType: number, description: string, videoCdn: object, token: string, options?: {
        proxyIp?: string;
        topic?: string[];
    }): Promise<ApiResponse>;
    mentionList(myUserName: string, myRoleType: number, reqScene: number, token: string, lastBuff?: string): Promise<ApiResponse>;
    likeFavList(myUserName: string, myRoleType: number, flag: number, token: string, proxyIp?: string, lastBuffer?: string): Promise<ApiResponse>;
    idFav(myUserName: string, opType: number, objectNonceId: string, sessionBuffer: string, objectId: number, toUserName: string, myRoleType: number, token: string, proxyIp?: string): Promise<ApiResponse>;
    idLike(myUserName: string, opType: number, objectNonceId: string, sessionBuffer: string, objectId: number, toUserName: string, myRoleType: number, token: string, proxyIp?: string): Promise<ApiResponse>;
    finderOpt(myUserName: string, myRoleType: number, toUserName: string, opType: number, id: string, remain: number, token: string): Promise<ApiResponse>;
    sendFinderMsg(toWxid: string, id: number, username: string, nickname: string, headUrl: string, nonceId: string, mediaType: string, width: string, height: string, url: string, thumbUrl: string, thumbUrlToken: string, description: string, videoPlayLen: string, token: string, proxyIp?: string): Promise<ApiResponse>;
    sendFinderSns(allowWxIds: string[], atWxIds: string[], disableWxIds: string[], id: number, username: string, nickname: string, headUrl: string, nonceId: string, mediaType: string, width: string, height: string, url: string, thumbUrl: string, thumbUrlToken: string, description: string, videoPlayLen: string, token: string, proxyIp?: string): Promise<ApiResponse>;
    syncPrivateLetterMsg(token: string, proxyIp?: string, keyBuff?: string): Promise<ApiResponse>;
    contactList(myUserName: string, queryInfo: string, myRoleType: number, token: string, proxyIp?: string): Promise<ApiResponse>;
    postPrivateLetter(content: string, msgSessionId: string, myUserName: string, toUserName: string, token: string, proxyIp?: string): Promise<ApiResponse>;
    postPrivateLetterImg(imgUrl: string, msgSessionId: string, myUserName: string, toUserName: string, token: string, proxyIp?: string): Promise<ApiResponse>;
    scanBrowse(myUserName: string, myRoleType: number, qrContent: string, objectId: number, token: string, proxyIp?: string): Promise<ApiResponse>;
    scanComment(myUserName: string, myRoleType: number, qrContent: string, objectId: number, commentContent: string, token: string, options?: {
        proxyIp?: string;
        replyUsername?: string;
        refCommentId?: number;
        rootCommentId?: number;
    }): Promise<ApiResponse>;
    scanFav(myUserName: string, myRoleType: number, qrContent: string, objectId: number, token: string, proxyIp?: string): Promise<ApiResponse>;
    scanLike(myUserName: string, myRoleType: number, qrContent: string, objectId: number, token: string, proxyIp?: string): Promise<ApiResponse>;
    scanLoginChannels(qrContent: string, token: string, proxyIp?: string): Promise<ApiResponse>;
    scanQrCode(myUserName: string, myRoleType: number, qrContent: string, token: string, proxyIp?: string): Promise<ApiResponse>;
}

declare class WeChatBotClient {
    private http;
    readonly auth: AuthModule;
    readonly message: MessageModule;
    readonly group: GroupModule;
    readonly contact: ContactModule;
    readonly personal: PersonalModule;
    readonly favorite: FavoriteModule;
    readonly label: LabelModule;
    readonly download: DownModule;
    readonly sns: SnsModule;
    readonly finder: FinderModule;
    constructor(options?: ClientOptions);
    request<T = any>(endpoint: string, token: string, payload?: object): Promise<ApiResponse<T>>;
}

export { type ApiResponse, AuthModule, type ClientOptions, ContactModule, DownModule, FavoriteModule, FinderModule, GroupModule, LabelModule, MessageModule, PersonalModule, SnsModule, WeChatBotClient };
